import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { province, jobIncomeType } from '../constants';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
@Component({
  selector: 'app-mortgage-qualification',
  templateUrl: './mortgage-qualification.component.html',
  styleUrls: ['./mortgage-qualification.component.css']
})
export class MortgageQualificationComponent implements OnInit, OnChanges {

  province = province;
  jobIncomeType = jobIncomeType;

  @Input() formGroup: FormGroup;

  mortgage: Mortgage;

  constructor(private mbs: MortgageBuilderService) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
  }

  createForm() {
    this.formGroup.addControl('firstName', new FormControl('', Validators.required));
    this.formGroup.addControl('lastName', new FormControl('', Validators.required));
    this.formGroup.addControl('emailAddress', new FormControl('', Validators.required));
    this.formGroup.addControl('contactNumber', new FormControl('', Validators.required));
    this.formGroup.addControl('streetAddress', new FormControl('', Validators.required));
    this.formGroup.addControl('city', new FormControl('', Validators.required));
    this.formGroup.addControl('province', new FormControl('', Validators.required));
    this.formGroup.addControl('postalCode', new FormControl('', Validators.required));

    this.formGroup.addControl('jobTitle', new FormControl('', Validators.required));
    this.formGroup.addControl('annualIncome', new FormControl('', Validators.required));
    this.formGroup.addControl('jobIncomeType', new FormControl('', Validators.required));
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
  }

  save() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    const mortgageBuilder = this.mortgageBuilder();
    this.mbs.saveMortgageBuilder(mortgageBuilder);
    console.log(mortgageBuilder);
  }

  mortgageBuilder() {
    const m = this.formGroup.value;
    const savePersonalInfo: PersonalInfo = {
      firstName: m.firstName,
      lastName: m.lastName,
      emailAddress: m.emailAddress,
      contactNumber: m.contactNumber,
      address: {
        street: m.streetAddress,
        city: m.city,
        province: m.province,
        postalCode: m.postalCode
      }
    };
    const saveJobInfo: JobInfo = {
      profession: m.jobTitle,
      annualIncome: m.annualIncome,
      incomeType: m.jobIncomeType
    };
    if (this.mortgage.personalInfo === undefined) {
      this.mortgage.personalInfo = savePersonalInfo;
    } else {
      Object.assign(this.mortgage.personalInfo, savePersonalInfo);
    }
    if (this.mortgage.jobInfo === undefined) {
      this.mortgage.jobInfo = saveJobInfo;
    } else {
      Object.assign(this.mortgage.jobInfo, saveJobInfo);
    }
    return this.mortgage;
  }
}
