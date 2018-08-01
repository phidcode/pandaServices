import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { amortizationPeriod, paymentFrequency, debtType, Debt } from '../constants';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
import { TranslateService } from '@ngx-translate/core';

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

  mortgage: Mortgage;

  constructor(private fb: FormBuilder, private mbs: MortgageBuilderService, public translate: TranslateService) { 
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.createForm();
    this.resetForm();
  }

  ngOnChanges() {
  }

  createForm() {
    this.formGroup.addControl('selectedHomePrice', new FormControl('', Validators.required));
    this.formGroup.addControl('selectedAmortizationPeriod', new FormControl());
    this.formGroup.addControl('selectedDownPaymentDollar', new FormControl());
    this.formGroup.addControl('selectedPaymentFrequency', new FormControl('', Validators.required));
    this.formGroup.addControl('selectedCurrentMortgageBalance', new FormControl());
    this.formGroup.addControl('selectedRemainingAmortization', new FormControl());
    this.formGroup.addControl('selectedAdditionalFundsNeeded', new FormControl());
    this.formGroup.addControl('selectedMortgageAmount', new FormControl({ value: '', disabled: true }));
    this.formGroup.addControl(this.otherDebtKey, this.fb.array([]));
    this.addOtherDebts();

    this.formGroup.get('selectedCurrentMortgageBalance').valueChanges.subscribe(val => {
      const amount = val + this.formGroup.value.selectedAdditionalFundsNeeded;
      this.formGroup.get('selectedMortgageAmount').setValue(amount);
    });

    this.formGroup.get('selectedAdditionalFundsNeeded').valueChanges.subscribe(val => {
      const amount = val + this.formGroup.value.selectedCurrentMortgageBalance;
      this.formGroup.get('selectedMortgageAmount').setValue(amount);
    });
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    if (this.mortgage !== undefined && this.mortgage.purpose !== undefined) {
      const info = this.mortgage.purpose;
      this.formGroup.reset({
        selectedHomePrice: info.homePrice,
        selectedAmortizationPeriod: info.amortizationPeriod,
        selectedDownPaymentDollar: info.downPayment,
        selectedPaymentFrequency: info.paymentFrequency,
        selectedCurrentMortgageBalance: info.currentMortgageBalance,
        selectedRemainingAmortization: info.remainingAmortization,
        selectedAdditionalFundsNeeded: info.additionalFundsNeeded,
        selectedMortgageAmount: info.mortgageAmount
      });
    }
    console.log(this.mortgage);
  }

  get otherDebts(): FormArray {
    return this.formGroup.get(this.otherDebtKey) as FormArray;
  }

  // get calculatedMortgageAmount(): FormControl {
  //   const amount = this.formGroup.value.selectedCurrentMortgageBalance + this.formGroup.value.selectedAdditionalFundsNeeded;
  //   return new FormControl({ value: amount, disabled: true });
  // }

  addOtherDebts() {
    this.otherDebts.push(this.fb.group(new Debt()));
  }

  removeOtherDebts(i) {
    this.otherDebts.removeAt(i);
  }

  save() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    const mortgageBuilder = this.mortgageBuilder();
    this.mbs.saveMortgageBuilder(mortgageBuilder);
    console.log(mortgageBuilder);
  }

  mortgageBuilder() {
    const savePurpose: Purpose = {
      type: this.mortgage.purpose.type,
      homePrice: this.formGroup.get('selectedHomePrice').value,
      amortizationPeriod: this.formGroup.get('selectedAmortizationPeriod').value,
      downPayment: this.formGroup.get('selectedDownPaymentDollar').value,
      paymentFrequency: this.formGroup.get('selectedPaymentFrequency').value,
      currentMortgageBalance: this.formGroup.get('selectedCurrentMortgageBalance').value,
      remainingAmortization: this.formGroup.get('selectedRemainingAmortization').value,
      additionalFundsNeeded: this.formGroup.get('selectedAdditionalFundsNeeded').value,
      mortgageAmount: this.formGroup.get('selectedMortgageAmount').value
    };
    if (this.mortgage.purpose === undefined) {
      this.mortgage.purpose = savePurpose;
    } else {
      Object.assign(this.mortgage.purpose, savePurpose);
    }
    return this.mortgage;
  }
}
