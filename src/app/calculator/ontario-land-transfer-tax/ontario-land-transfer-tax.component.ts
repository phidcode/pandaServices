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

  ontarioTaxRate = [0.005, 0.01, 0.015, 0.02, 0.025];

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
      purchasePrice: [0.00, Validators.required],
      torontoProperty: [false],
      firstTimeBuyer: [false],
    });
  }

  onSubmit() {
    console.log(this.ontarioLandTransferTaxForm.value);
    this.submitted = true;
    // this.ontarioLandTransferTaxForm.reset();
    const {purchasePrice, torontoProperty, firstTimeBuyer} = this.ontarioLandTransferTaxForm.value;
    if (purchasePrice > 0 && purchasePrice <= 55000) {
      this.provincialLTT = (0.005) * purchasePrice;
      if (torontoProperty === true) { this.torontoLTT = (0.005) * purchasePrice; }
      if (firstTimeBuyer === true) {
        this.provincialRebate = this.provincialLTT;
        if (torontoProperty === true) { this.torontoRebate = this.torontoLTT; }
      }
    } else if (purchasePrice > 55000 && purchasePrice <= 250000) {
      this.provincialLTT = (0.01) * (purchasePrice - 55000) + (275);
      if (torontoProperty === true) { this.torontoLTT = (0.01) * (purchasePrice - 55000) + (275); }
      if (firstTimeBuyer === true) {
        this.provincialRebate = this.provincialLTT;
        if (torontoProperty === true) { this.torontoRebate = this.torontoLTT; }
      }
    } else if (purchasePrice > 250000 && purchasePrice <= 400000) {
      this.provincialLTT = (0.015) * (purchasePrice - 250000) + (2225);
      if (torontoProperty === true) { this.torontoLTT = (0.015) * (purchasePrice - 250000) + (2225); }
      if (firstTimeBuyer === true) {
        if (torontoProperty === true) { this.torontoRebate = this.torontoLTT; }
        if (purchasePrice <= 368333) {
          this.provincialRebate = this.provincialLTT;
        } else {
          this.provincialRebate = 4000;
        }
      }
    } else if (purchasePrice > 400000 && purchasePrice <= 2000000) {
      this.provincialLTT = (0.02) * (purchasePrice - 400000) + (4475);
      if (torontoProperty === true) { this.torontoLTT = (0.02) * (purchasePrice - 400000) + (4475); }
      if (firstTimeBuyer === true) {
        this.provincialRebate = 4000;
        if (torontoProperty === true) { this.torontoRebate = 4475; }
      }
    } else {
      this.provincialLTT = (0.025) * (purchasePrice - 2000000) + (36475);
      if (torontoProperty === true) { this.torontoLTT = (0.025) * (purchasePrice - 2000000) + (36475); }
      if (firstTimeBuyer === true) {
        this.provincialRebate = 4000;
        if (torontoProperty === true) { this.torontoRebate = 4475; }
      }
    }
    this.totalRebate = this.provincialRebate + this.torontoRebate;
    this.totalLTT = this.provincialLTT + this.torontoLTT - this.totalRebate;
  }

  ngOnInit() {
  }
}
