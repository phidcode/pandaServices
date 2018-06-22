import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { amortizationPeriod, paymentFrequency, debtType, Debt } from '../constants';


@Component({
  selector: 'app-mortgage-selection',
  templateUrl: './mortgage-selection.component.html',
  styleUrls: ['./mortgage-selection.component.css']
})
export class MortgageSelectionComponent implements OnInit, OnChanges {

  amortizationPeriod = amortizationPeriod;
  paymentFrequency = paymentFrequency;
  debtType = debtType;

  otherDebtKey = 'otherDebts';

  value = '';
  homeprice = '';
  DownPaymentDollar = '';
  MortgageAmount = '';
  AmortPeriod_selected = '25';
  MortPaymentFreq_selected = 'Monthly';

  @Input() formGroup: FormGroup;
  @Input() mode: string;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
  }

  createForm() {
    this.formGroup.addControl('selectedHomePrice', new FormControl());
    this.formGroup.addControl('selectedAmortizationPeriod', new FormControl());
    this.formGroup.addControl('selectedDownPaymentDollar', new FormControl());
    this.formGroup.addControl('selectedPaymentFrequency', new FormControl());
    this.formGroup.addControl('selectedCurrentMortgageBalance', new FormControl());
    this.formGroup.addControl('selectedRemainingAmortization', new FormControl());
    this.formGroup.addControl('selectedAdditionalFundsNeeded', new FormControl());
    this.formGroup.addControl('selectedMortgageAmount', new FormControl({ value: '', disabled: true }));
    this.formGroup.addControl(this.otherDebtKey, this.fb.array([]));
    this.addOtherDebts();
  }

  get otherDebts(): FormArray {
    return this.formGroup.get(this.otherDebtKey) as FormArray;
  }

  addOtherDebts() {
    this.otherDebts.push(this.fb.group(new Debt()));
  }

  removeOtherDebts(i) {
    this.otherDebts.removeAt(i);
  }
}
