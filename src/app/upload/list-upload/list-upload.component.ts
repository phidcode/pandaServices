import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { FileUpload } from '../fileupload';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit, OnChanges {

  @Input() fileUploadList: FileUpload[];

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
