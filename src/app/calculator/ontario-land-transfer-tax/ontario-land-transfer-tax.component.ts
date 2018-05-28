import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-ontario-land-transfer-tax',
  templateUrl: './ontario-land-transfer-tax.component.html',
  styleUrls: ['./ontario-land-transfer-tax.component.css']
})
export class OntarioLandTransferTaxComponent implements OnInit {

  constructor(private meta: Meta,title: Title) {    
    title.setTitle('Ontario Land Transfer Tax Calculator - MeeFinancial Inc.');    
    this.meta.addTag({ name: 'description', content: 'Use this Land Transfer Tax Calculator to learn more about first time home buyer rebate, Provincial Land Transfer Tax (PLTT) and Municipal Land Transfer Tax (MLTT) in Ontario and Toronto.' },true);    
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'ontario land transfer tax, ontario property closing cost, land transfer tax calculator, land transfer tax calculation, land transfer tax calculations, land tax calculator, land transfer tax ontario calculator, land transfer tax toronto calculator, toronto real estate' }, true);    
  }

  
  ngOnInit() {
  }
  
  submitted = false;

  onSubmit() { this.submitted = true; }
}
