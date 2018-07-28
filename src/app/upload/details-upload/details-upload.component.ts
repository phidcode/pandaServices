import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FileUpload } from '../fileupload';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit, OnChanges {

  @Input() fileUpload: FileUpload;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  deleteFileUpload(fileUpload) {
    // this.uploadService.deleteFileUpload(fileUpload);
  }
}
