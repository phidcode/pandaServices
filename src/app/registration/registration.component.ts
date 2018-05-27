import { factory } from '../log4j/configLog4j';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './data-model';

const log = factory.getLogger('RegistrationComponent');

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnChanges {

  registrationForm: FormGroup;
  steps;
  showSteps;
  stepsRange = [0, 2];
  jobIncomeTypes = ['Salaried', 'Commission', 'Self-Employed', 'Part-Time'];
  propertyTypes = ['Condo or Apartment', 'Townhouse', 'Semi-Detached', 'Detached'];
  propertyUsages = ['Principal Residence', 'Rental'];
  downPmtSources = ['Personal Savings', 'RRSP',
    'Gifts from Parents, Grandparents, Siblings',
    'Gifts from someone else', 'I\'ll borrow it'];

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.showSteps = [true, false, false];
    this.steps = 0;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.createForm();
  }

  ngOnChanges() {
    console.log('ngOnChanges');
    this.createForm();
  }

  onSubmit() {
    console.log('onSubmit');
    const formModel = this.registrationForm.value;
    console.log(formModel);
  }

  onNext() {
    console.log('onNext');
    this.steps = Math.min(++this.steps, this.stepsRange[1]);
    this.updateShowSteps();
  }

  onPrevious() {
    console.log('onPrevious');
    this.steps = Math.max(--this.steps, this.stepsRange[0]);
    this.updateShowSteps();
  }

  private updateShowSteps() {
    for (let _i = 0; _i < this.showSteps.length; _i++) {
      this.showSteps[_i] = this.steps === _i;
    }
  }

  createForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      myEmailAddress: '',
      myPhoneNumber: '',
      myStreetAddress: '',
      myCity: '',
      myProvince: '',
      myPostalCode: '',
      jobTitle: '',
      jobAnnualIncome: '',
      jobIncomeType: '',
      propertyType: '',
      propertyUsage: '',
      mortgageStreetAddress: '',
      mortgageCity: '',
      mortgageProvince: '',
      mortgagePostalCode: '',
      mortgagePropertyTax: '',
      mortgageCondoFee: '',
      downPmtSource: '',
      downPmtAmt: '',
      numOfProperties: ''
    });
  }
}
