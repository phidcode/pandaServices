import { factory } from '../log4j/configLog4j';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './data-model';
import { RegistrationService } from './registration.service';

const log = factory.getLogger('RegistrationComponent');

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnChanges {
  @Input() user: User;

  registrationForm: FormGroup;
  steps;
  showSteps;
  stepsRange = [0, 2];
  jobIncomeTypes = ['Salaried', 'Commission', 'Self-Employed', 'Part-Time'];
  propertyTypes = ['Condo or Apartment', 'Townhouse', 'Semi-Detached', 'Detached'];
  propertyUsages = ['Principal Residence', 'Rental'];
  downPmtSources = [
    { name: 'Personal Savings', selected: false },
    { name: 'RRSP', selected: false },
    { name: 'Gifts from Parents, Grandparents, Siblings', selected: false },
    { name: 'Gifts from someone else', selected: false },
    { name: 'I`ll borrow it', selected: false },
  ];

  constructor(private fb: FormBuilder, private rs: RegistrationService) {
    this.createForm();
    this.showSteps = [true, false, false];
    this.steps = 0;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.createForm();
  }

  ngOnChanges() {
    // console.log('ngOnChanges');
    // this.createForm();
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
      myEmailAddress: ['', Validators.required],
      myPhoneNumber: ['', Validators.required],
      address: this.fb.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        province: ['', Validators.required],
        postalCode: ['', Validators.required],
      }),
      jobInfo: this.fb.group({
        title: ['', Validators.required],
        annualIncome: ['', Validators.required],
        incomeType: ['', Validators.required],
      }),
      property: this.fb.group({
        type: ['', Validators.required],
        usage: ['', Validators.required],
      }),
      mortgageAddress: this.fb.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        province: ['', Validators.required],
        postalCode: ['', Validators.required],
      }),
      mortgageInfo: this.fb.group({
        propertyTax: '',
        condoFee: ''
      }),
      downPmtSources: this.buildDownPmtSourcesFA(),
      downPmtAmt: ['', Validators.required],
      numOfProperties: ['', Validators.required],
      vehicle: '',
    });
  }

  buildDownPmtSourcesFA() {
    const arr = this.downPmtSources.map(source => {
      return this.fb.control(source.selected);
    });
    return this.fb.array(arr);
  }

  get downPmtSourceFA() {
    return this.registrationForm.get('downPmtSources');
  }

  onSubmit() {
    console.log('onSubmit');
    const user = this.prepareSaveUser();
    // this.rs.addItem(user);
  }

  prepareSaveUser(): User {
    const formModel = this.registrationForm.value;
    console.log(formModel);
    return null;
  }
}
