import { factory } from '../log4j/configLog4j';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User, Phone, Address, Profession, Property, Asset } from './data-model';
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

  constructor(private fb: FormBuilder, private service: RegistrationService) {
    this.createForm();
    this.showSteps = [true, false, false];
    this.steps = 0;
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    // console.log('ngOnChanges');
    // this.createForm();
  }

  onNext() {
    this.steps = Math.min(++this.steps, this.stepsRange[1]);
    this.updateShowSteps();
  }

  onPrevious() {
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

  revert() { this.rebuildForm(); }

  rebuildForm() {
    this.registrationForm.reset();
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
    const user = this.prepareSaveUser();
    this.rebuildForm();
    this.service.save(user);
  }

  prepareSaveUser(): User {
    const form = this.registrationForm.value;
    const address = form.address;
    const profession = form.jobInfo;
    const property = form.property;
    const propertyAddress = form.mortgageAddress;
    const propertyInfo = form.mortgageInfo;

    const user = {
      firstName: form.firstName,
      lastName: form.lastName,
      emailAddress: form.myEmailAddress,
      phoneNumber: form.myPhoneNumber,
      address: {
        street: address.streetAddress,
        city: address.city,
        province: address.province,
        postalCode: address.postalCode,
      },
      profession: {
        type: profession.incomeType,
        jobTitle: profession.title,
        annualIncome: profession.annualIncome,
      },
      properties: {
        type: property.type,
        usage: property.usage,
        address: {
          street: propertyAddress.streetAddress,
          city: propertyAddress.city,
          province: propertyAddress.province,
          postalCode: propertyAddress.postalCode,
        },
        propertyTax: propertyInfo.propertyTax,
        condoFees: propertyInfo.condoFee,
      },
      assets: {
        numberOfAssets: form.numOfProperties,
        downPmtAmt: form.downPmtAmt,
        downPmtSources: [],
      }
    };
    return user;
  }
}
