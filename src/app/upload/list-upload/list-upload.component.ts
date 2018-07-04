import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  fileUploads: any[];

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    console.log('Testing');
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

}
