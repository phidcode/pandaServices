import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

export interface Period {
  title: string;
  value: number;
}
const amortizationPeriod: Period[] =
  [
    {
      title: '5 Years',
      value: 5
    }, {
      title: '10 Years',
      value: 10
    }, {
      title: '15 Years',
      value: 15
    }, {
      title: '20 Years',
      value: 20
    }, {
      title: '25 Years',
      value: 25
    }
  ];

export interface PaymentFrequency {
  title: string;
  value: string;
}

const paymentFrequency: PaymentFrequency[] =
  [
    {
      title: 'Monthly',
      value: 'monthly',
    }, {
      title: 'Semi-Monthly',
      value: 'semiMonthly',
    }, {
      title: 'Bi-Weekly',
      value: 'biWeekly',
    }, {
      title: 'Weekly',
      value: 'weekly',
    },
  ];

export interface DebtType {
  title: string;
  value: string;
}

const debtType: DebtType[] =
  [
    {
      title: 'Credit Card',
      value: 'creditCard'
    }, {
      title: 'Car Loan',
      value: 'carLoan'
    }, {
      title: 'Line of Credit',
      value: 'lineOfCredit'
    }, {
      title: 'Second Mortgage',
      value: 'secondMortgage'
    }, {
      title: 'Other Debt',
      value: 'otherDebt'
    },
  ];
@Component({
  selector: 'app-mortgage-selection',
  templateUrl: './mortgage-selection.component.html',
  styleUrls: ['./mortgage-selection.component.css']
})
export class MortgageSelectionComponent implements OnInit, OnChanges {

  amortizationPeriod = amortizationPeriod;
  paymentFrequency = paymentFrequency;
  debtType = debtType;

  value = '';
  homeprice = '';
  DownPaymentDollar = '';
  MortgageAmount = '';
  AmortPeriod_selected = '25';
  MortPaymentFreq_selected = 'Monthly';

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
