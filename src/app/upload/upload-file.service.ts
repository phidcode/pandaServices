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

    const uploadRefPath = this.basePath + '/' + file.name;
    // Create a root reference
    const storageRef = this.fb.storage().ref();
    // Create a reference to the upload file
    const uploadRef = storageRef.child(uploadRefPath);
    // Upload the file
    const uploadTask = uploadRef.put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          // fileUpload.url = downloadURL;
          // fileUpload.uploadRefPath = uploadRefPath;
          // fileUpload.name = fileUpload.file.name;
          // fileUpload.file = undefined;
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
