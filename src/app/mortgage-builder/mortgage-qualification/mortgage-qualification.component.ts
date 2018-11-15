import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { province, jobIncomeType } from '../constants';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mortgage-qualification',
  templateUrl: './mortgage-qualification.component.html',
  styleUrls: ['./mortgage-qualification.component.css']
})
export class MortgageQualificationComponent implements OnInit, OnChanges {

  province = province;
  jobIncomeType = jobIncomeType;

  secondaryApplicant = false;

  @Input() formGroup: FormGroup;

  mortgage: Mortgage;

  constructor(private mbs: MortgageBuilderService, public translate: TranslateService) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.createForm();
    this.resetForm();
  }

  ngOnChanges() {
    this.resetForm();
  }

  createForm() {
    this.formGroup.addControl('firstName', new FormControl('', Validators.required));
    this.formGroup.addControl('lastName', new FormControl('', Validators.required));
    this.formGroup.addControl('emailAddress', new FormControl('', Validators.required));
    this.formGroup.addControl('contactNumber', new FormControl('', Validators.required));
    this.formGroup.addControl('streetAddress', new FormControl('', Validators.required));
    this.formGroup.addControl('city', new FormControl('', Validators.required));
    this.formGroup.addControl('province', new FormControl('Ontario', Validators.required));
    this.formGroup.addControl('postalCode', new FormControl('', Validators.required));
    this.formGroup.addControl('jobTitle', new FormControl('', Validators.required));
    this.formGroup.addControl('annualIncome', new FormControl('', Validators.required));
    this.formGroup.addControl('jobIncomeType', new FormControl('', Validators.required));

    this.formGroup.addControl('firstName2nd', new FormControl(''));
    this.formGroup.addControl('lastName2nd', new FormControl(''));
    this.formGroup.addControl('emailAddress2nd', new FormControl(''));
    this.formGroup.addControl('contactNumber2nd', new FormControl(''));
    this.formGroup.addControl('streetAddress2nd', new FormControl(''));
    this.formGroup.addControl('city2nd', new FormControl(''));
    this.formGroup.addControl('province2nd', new FormControl('Ontario'));
    this.formGroup.addControl('postalCode2nd', new FormControl(''));
    this.formGroup.addControl('jobTitle2nd', new FormControl(''));
    this.formGroup.addControl('annualIncome2nd', new FormControl(''));
    this.formGroup.addControl('jobIncomeType2nd', new FormControl(''));
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();

    if (this.mortgage !== undefined && this.mortgage.personalInfo !== undefined && this.mortgage.jobInfo !== undefined) {
      const info = this.mortgage.personalInfo;
      const jobInfo = this.mortgage.jobInfo;
      this.formGroup.reset({
        firstName: info.firstName,
        lastName: info.lastName,
        emailAddress: info.emailAddress,
        contactNumber: info.contactNumber,
        streetAddress: info.address.street,
        city: info.address.city,
        province: info.address.province,
        postalCode: info.address.postalCode,
        jobTitle: jobInfo.profession,
        annualIncome: jobInfo.annualIncome,
        jobIncomeType: jobInfo.incomeType,
      });
    }
    if (this.mortgage !== undefined && this.mortgage.personalInfo2nd !== undefined && this.mortgage.jobInfo2nd !== undefined) {
      const info = this.mortgage.personalInfo;
      const jobInfo = this.mortgage.jobInfo;
      this.formGroup.reset({
        firstName2nd: info.firstName,
        lastName2nd: info.lastName,
        emailAddress2nd: info.emailAddress,
        contactNumber2nd: info.contactNumber,
        streetAddress2nd: info.address.street,
        city2nd: info.address.city,
        province2nd: info.address.province,
        postalCode2nd: info.address.postalCode,
        jobTitle2nd: jobInfo.profession,
        annualIncome2nd: jobInfo.annualIncome,
        jobIncomeType2nd: jobInfo.incomeType
      });
    }
  }

  save() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    const mortgageBuilder = this.mortgageBuilder();
    this.mbs.saveMortgageBuilder(mortgageBuilder);
    // console.log(mortgageBuilder);
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
    if (this.mortgage.personalInfo === undefined && this.mortgage.jobInfo === undefined) {
      this.mortgage.personalInfo = savePersonalInfo;
      this.mortgage.jobInfo = saveJobInfo;
    } else {
      Object.assign(this.mortgage.personalInfo, savePersonalInfo);
      Object.assign(this.mortgage.jobInfo, saveJobInfo);
    }

    if (this.secondaryApplicant === true) {
      const save2ndPersonalInfo: PersonalInfo = {
        firstName: m.firstName2nd,
        lastName: m.lastName2nd,
        emailAddress: m.emailAddress2nd,
        contactNumber: m.contactNumber2nd,
        address: {
          street: m.streetAddress2nd,
          city: m.city2nd,
          province: m.province2nd,
          postalCode: m.postalCode2nd
        }
      };
      const save2ndJobInfo: JobInfo = {
        profession: m.jobTitle2nd,
        annualIncome: m.annualIncome2nd,
        incomeType: m.jobIncomeType2nd
      };
      if (this.mortgage.personalInfo2nd === undefined && this.mortgage.jobInfo2nd === undefined) {
        this.mortgage.personalInfo2nd = save2ndPersonalInfo;
        this.mortgage.jobInfo2nd = save2ndJobInfo;
      } else {
        Object.assign(this.mortgage.personalInfo2nd, save2ndPersonalInfo);
        Object.assign(this.mortgage.jobInfo2nd, save2ndJobInfo);
      }
    }

    return this.mortgage;
  }
}
