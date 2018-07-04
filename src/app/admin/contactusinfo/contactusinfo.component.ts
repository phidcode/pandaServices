import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-contactusinfo',
  templateUrl: './contactusinfo.component.html',
  styleUrls: ['./contactusinfo.component.css']
})
export class ContactusinfoComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  public columnDefs;
  public rowSelection;
  public defaultColDef;

  constructor(private http: HttpClient, private service: AdminService) {
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
        width: 150,
        filterParams: { newRowsAction: 'keep' },
      },
      {
        headerName: 'Email Address',
        field: 'email',
        width: 150,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Message',
        field: 'message',
        width: 500,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Create Date',
        field: 'date',
        width: 200,
        filterParams: { newRowsAction: 'keep' }
      }
    ];
    this.rowSelection = 'multiple';
    this.defaultColDef = {
      editable: true,
      enableValue: true
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.service
      .getAllMessagesInfo()
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }

  ngOnInit() {
  }

}
