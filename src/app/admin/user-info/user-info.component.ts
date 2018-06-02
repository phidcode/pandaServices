import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowSelection;
  private defaultColDef;

  constructor(private http: HttpClient, private service: AdminService) {
    this.columnDefs = [
      {
        headerName: 'First Name',
        field: 'firstName',
        width: 150,
        filterParams: { newRowsAction: 'keep' },
      },
      {
        headerName: 'Last Name',
        field: 'lastName',
        width: 150,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Email Address',
        field: 'emailAddress',
        width: 150,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Contact Number',
        field: 'phoneNumber',
        width: 150,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Address',
        field: 'address.street',
        width: 150,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'City',
        field: 'address.city',
        width: 80,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Province',
        field: 'address.province',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Postal Code',
        field: 'address.postalCode',
        width: 120,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Profession',
        field: 'profession.jobTitle',
        width: 150,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Income Type',
        field: 'profession.type',
        width: 120,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Annual Income',
        field: 'profession.annualIncome',
        width: 130,
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

    this.service.
      getAllRegisteredUserInfo()
      .subscribe(data => {
        params.api.setRowData(data);
      });

    // this.http
    //   .get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
    //   .subscribe(data => {
    //     params.api.setRowData(data);
    //   });
  }

  ngOnInit() {
  }

}
