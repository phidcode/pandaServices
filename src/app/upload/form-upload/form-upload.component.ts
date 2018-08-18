import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { UploadFileService } from '../upload-file.service';
import { FileUpload } from '../fileupload';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit, OnChanges {

  @Input() fileUploadList: FileUpload[];
  selectedFiles: FileList;
  currentFile: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('FormUpload' + this.fileUploadList);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFile = file;
    this.uploadService.pushFileToStorage(file, this.progress, this.fileUploadList);
  }
}
