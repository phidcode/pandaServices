import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app'; // For typings
import { FirebaseApp } from 'angularfire2'; // For methods
import { AngularFirestore } from 'angularfire2/firestore';
import { FileUpload } from './fileupload';

@Injectable()
export class UploadFileService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private fb: FirebaseApp) { }

  pushFileToStorage(file: File, progress: { percentage: number }, uploadFiles: FileUpload[]) {

    const storedName = Date.now() + Math.random() + '.' + file.name.split('.').pop();
    const uploadRefPath = this.basePath + '/' + storedName;
    // Create a root reference
    const storageRef = this.fb.storage().ref();
    // Create a reference to the upload file
    const uploadRef = storageRef.child(uploadRefPath);
    // Upload the file
    const uploadTask = uploadRef.put(file);

    console.log('FileSize:' + file.size);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log('Upload Error:' + error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          const newFile = {
            url: downloadURL,
            uploadRefPath: uploadRefPath,
            name: file.name,
          };
          uploadFiles.push(newFile);
        },
          (error) => {
            // Recreate the file URL incase of GET permission
            console.log(error.message);
            const domainBase = 'https://firebasestorage.googleapis.com';
            const downloadBase = 'https://firebasestorage.googleapis.com';
            const apiBaseUrl = '/v0';
            const bucket = uploadTask.snapshot.metadata.bucket;
            const fullPath = encodeURIComponent(uploadTask.snapshot.metadata.fullPath);
            const downloadURL = downloadBase + apiBaseUrl + '/b/' + bucket + '/o/' + fullPath;
            const newFile = {
              url: downloadURL,
              uploadRefPath: uploadRefPath,
              name: file.name,
            };
            uploadFiles.push(newFile);
          });
      }
    );
  }

  // private saveFileData(fileUpload: FileUpload) {
  //   this.db.list(`${this.basePath}/`).push(fileUpload);
  // }

  // getFileUploads(numberItems): AngularFireList<FileUpload> {
  //   return this.db.list(this.basePath, ref =>
  //     ref.limitToLast(numberItems));
  // }

  // deleteFileUpload(fileUpload: FileUpload) {
  //   this.deleteFileDatabase(fileUpload.key)
  //     .then(() => {
  //       this.deleteFileStorage(fileUpload.name);
  //     })
  //     .catch(error => console.log(error));
  // }

  // private deleteFileDatabase(key: string) {
  //   return this.db.list(`${this.basePath}/`).remove(key);
  // }

  // deleteFileStorage(name: string) {
  //   const storageRef = firebase.storage().ref();
  //   storageRef.child(`${this.basePath}/${name}`).delete();
  // }
}
