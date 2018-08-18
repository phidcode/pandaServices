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
  errorMessages: string[];
  selectedFiles: FileList;
  currentFile: File;
  progress: { percentage: number } = { percentage: 0 };
  maxFileSize = 10 * 1024 * 1024;

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
    this.errorMessages = [];
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFile = file;
    if (file.size > this.maxFileSize) {
      console.log('File size is limited to 10mb or less.');
      this.errorMessages.push('File size is limited to 10mb or less.');
    } else {
      this.uploadService.pushFileToStorage(file, this.progress, this.fileUploadList);
    }
  }
}
