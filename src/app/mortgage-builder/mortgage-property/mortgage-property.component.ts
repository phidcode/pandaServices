import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { province, propertyType, propertyUsage } from '../constants';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mortgage-property',
  templateUrl: './mortgage-property.component.html',
  styleUrls: ['./mortgage-property.component.css']
})
export class MortgagePropertyComponent implements OnInit, OnChanges {

  province = province;
  propertyType = propertyType;
  propertyUsage = propertyUsage;

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
    this.formGroup.addControl('propertyType', new FormControl('', Validators.required));
    this.formGroup.addControl('propertyUsage', new FormControl('', Validators.required));
    this.formGroup.addControl('streetAddress', new FormControl('', Validators.required));
    this.formGroup.addControl('city', new FormControl('', Validators.required));
    this.formGroup.addControl('province', new FormControl('Ontario', Validators.required));
    this.formGroup.addControl('postalCode', new FormControl('', Validators.required));
    this.formGroup.addControl('propertyTax', new FormControl('', Validators.required));
    this.formGroup.addControl('condoFee', new FormControl(0));
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    if (this.mortgage !== undefined && this.mortgage.propertyInfo !== undefined) {
      const info = this.mortgage.propertyInfo;
      this.formGroup.reset({
        propertyType: info.type,
        propertyUsage: info.usage,
        streetAddress: info.address.street,
        city: info.address.city,
        province: info.address.province,
        postalCode: info.address.postalCode,
        propertyTax: info.tax,
        condoFee: info.fees
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
    const savePropertyInfo: PropertyInfo = {
      type: m.propertyType,
      usage: m.propertyUsage,
      tax: m.propertyTax,
      fees: m.condoFee,
      address: {
        street: m.streetAddress,
        city: m.city,
        province: m.province,
        postalCode: m.postalCode
      }
    };
    if (this.mortgage.propertyInfo === undefined) {
      this.mortgage.propertyInfo = savePropertyInfo;
    } else {
      Object.assign(this.mortgage.propertyInfo, savePropertyInfo);
    }
    return this.mortgage;
  }
}
