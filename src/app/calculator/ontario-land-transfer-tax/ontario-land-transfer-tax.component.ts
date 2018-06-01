import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import {and} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-ontario-land-transfer-tax',
  templateUrl: './ontario-land-transfer-tax.component.html',
  styleUrls: ['./ontario-land-transfer-tax.component.css']
})
export class OntarioLandTransferTaxComponent implements OnInit {

  ontarioLandTransferTaxForm: FormGroup;
  submitted = false;

  provincialLTT = 0.0;
  torontoLTT = 0.0;
  provincialRebate = 0.0;
  torontoRebate = 0.0;
  totalRebate = 0.0;
  totalLTT = 0.0;


  constructor(private meta: Meta, private title: Title, private fb: FormBuilder) {
    title.setTitle('Ontario Land Transfer Tax Calculator - MeeFinancial Inc.');
    this.meta.addTag({ name: 'description', content: 'Use this Land Transfer Tax Calculator to learn more about first time home buyer rebate, Provincial Land Transfer Tax (PLTT) and Municipal Land Transfer Tax (MLTT) in Ontario and Toronto.' }, true);
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'ontario land transfer tax, ontario property closing cost, land transfer tax calculator, land transfer tax calculation, land transfer tax calculations, land tax calculator, land transfer tax ontario calculator, land transfer tax toronto calculator, toronto real estate' }, true);
    this.createForm();
  }

  createForm() {
    this.ontarioLandTransferTaxForm = this.fb.group({
      purchasePrice: [0.00, [Validators.required, Validators.min(0.01)]],
      torontoProperty: [false],
      firstTimeBuyer: [false],
    });
  }

  onSubmit() {
    console.log(this.ontarioLandTransferTaxForm.value);
    this.submitted = true;
    // this.ontarioLandTransferTaxForm.reset();
    const {purchasePrice, torontoProperty, firstTimeBuyer} = this.ontarioLandTransferTaxForm.value;
    this.calculateLLT(parseFloat(purchasePrice.replace(/[^0-9\.-]+/g,"")), torontoProperty, firstTimeBuyer);
  }

  calculateLLT(purchasePrice, torontoProperty, firstTimeBuyer) {
    if (purchasePrice >= 0 && purchasePrice <= 55000) {
      this.provincialLTT = (0.005) * purchasePrice;
      this.torontoLTT = (0.005) * purchasePrice;
      this.provincialRebate = this.provincialLTT;
      this.torontoRebate = this.torontoLTT;
    } else if (purchasePrice > 55000 && purchasePrice <= 250000) {
      this.provincialLTT = (0.01) * (purchasePrice - 55000) + (275);
      this.torontoLTT = (0.01) * (purchasePrice - 55000) + (275);
      this.provincialRebate = this.provincialLTT;
      this.torontoRebate = this.torontoLTT;
    } else if (purchasePrice > 250000 && purchasePrice <= 400000) {
      this.provincialLTT = (0.015) * (purchasePrice - 250000) + (2225);
      this.torontoLTT = (0.015) * (purchasePrice - 250000) + (2225);
      if (purchasePrice <= 368333) { this.provincialRebate = this.provincialLTT; } else { this.provincialRebate = 4000; }
      this.torontoRebate = this.torontoLTT;
    } else if (purchasePrice > 400000 && purchasePrice <= 2000000) {
      this.provincialLTT = (0.02) * (purchasePrice - 400000) + (4475);
      this.torontoLTT = (0.02) * (purchasePrice - 400000) + (4475);
      this.provincialRebate = 4000;
      this.torontoRebate = 4475;
    } else {
      this.provincialLTT = (0.025) * (purchasePrice - 2000000) + (36475);
      this.torontoLTT = (0.025) * (purchasePrice - 2000000) + (36475);
      this.provincialRebate = 4000;
      this.torontoRebate = 4475;
    }
    if (torontoProperty === false) {
      this.torontoLTT = 0.0;
      this.torontoRebate = 0.0;
    }
    this.totalRebate = this.provincialRebate + this.torontoRebate;
    if (firstTimeBuyer === false) { this.totalRebate = 0.0; }
    this.totalLTT = this.provincialLTT + this.torontoLTT - this.totalRebate;
  }

  ngOnInit() {
  }
}
