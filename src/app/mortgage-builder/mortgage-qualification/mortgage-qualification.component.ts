import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Province {
  title: string;
  value: string;
}
const province = [
  'Alberta',
  'Briish Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon'
];
const jobIncomeType = [
  'Salaried',
  'Commission',
  'Self-Employed',
  'Part-Time'
];
@Component({
  selector: 'app-mortgage-qualification',
  templateUrl: './mortgage-qualification.component.html',
  styleUrls: ['./mortgage-qualification.component.css']
})
export class MortgageQualificationComponent implements OnInit, OnChanges {

  province = province;
  jobIncomeType = jobIncomeType;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
