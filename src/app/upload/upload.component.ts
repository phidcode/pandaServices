import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FileUpload } from './fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit, OnChanges {

  @Input() fileUploadList: FileUpload[];

  isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('UploadComponent' + this.fileUploadList);
    this.isDisabled = this.fileUploadList.length >= 2;
  }
}
