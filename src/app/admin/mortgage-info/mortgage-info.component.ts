import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-mortgage-info',
  templateUrl: './mortgage-info.component.html',
  styleUrls: ['./mortgage-info.component.css']
})
export class MortgageInfoComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  public columnDefs;
  public rowSelection;
  public defaultColDef;

  constructor(private http: HttpClient, private service: AdminService) { }

  ngOnInit() {
    this.defHeader();
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
      getAllMortgageBuilderInfo()
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }

  defHeader() {
    this.columnDefs = [
    ];
  }
}
