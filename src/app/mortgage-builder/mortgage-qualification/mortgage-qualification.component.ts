import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { province, jobIncomeType } from '../constants';
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
    this.createForm();
  }

  ngOnChanges() {
  }

  createForm() {
    this.formGroup.addControl('firstName', new FormControl());
    this.formGroup.addControl('lastName', new FormControl());
    this.formGroup.addControl('emailAddress', new FormControl());
    this.formGroup.addControl('contactNumber', new FormControl());
    this.formGroup.addControl('streetAddress', new FormControl());
    this.formGroup.addControl('city', new FormControl());
    this.formGroup.addControl('province', new FormControl());
    this.formGroup.addControl('postalCode', new FormControl());

    this.formGroup.addControl('jobTitle', new FormControl());
    this.formGroup.addControl('annualIncome', new FormControl());
    this.formGroup.addControl('jobIncomeType', new FormControl());
  }
}
