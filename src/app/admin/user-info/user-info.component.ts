import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private autoGroupColumnDef;
  private rowSelection;
  private rowGroupPanelShow;
  private pivotPanelShow;
  private defaultColDef;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        width: 150,
        filterParams: { newRowsAction: 'keep' },
        checkboxSelection: function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 90,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Country',
        field: 'country',
        width: 120,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 90,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Date',
        field: 'date',
        width: 110,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Sport',
        field: 'sport',
        width: 110,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Total',
        field: 'total',
        width: 100,
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

    this.http
      .get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }

  ngOnInit() {
  }

}
