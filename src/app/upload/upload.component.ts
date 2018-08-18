import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FileUpload } from './fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit, OnChanges {

  @Input() fileUploadList: FileUpload[];
  numberOfFiles: number;

  isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('UploadComponent' + this.fileUploadList);
    console.log(changes.fileUploadList);
    this.numberOfFiles = this.fileUploadList.length;
    this.isDisabled = this.numberOfFiles >= 2;
  }
}
