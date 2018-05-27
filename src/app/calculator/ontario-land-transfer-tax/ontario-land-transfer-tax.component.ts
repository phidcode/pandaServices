import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ontario-land-transfer-tax',
  templateUrl: './ontario-land-transfer-tax.component.html',
  styleUrls: ['./ontario-land-transfer-tax.component.css']
})
export class OntarioLandTransferTaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  submitted = false;

  onSubmit() { this.submitted = true; }
}
