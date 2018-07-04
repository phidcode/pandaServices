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

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
  }

  save() {
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
    Object.assign(this.mortgage.personalInfo, savePersonalInfo);
    Object.assign(this.mortgage.jobInfo, saveJobInfo);
    return this.mortgage;
  }
}
