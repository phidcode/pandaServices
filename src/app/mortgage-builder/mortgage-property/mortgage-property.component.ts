import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { province, propertyType, propertyUsage } from '../constants';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';

@Component({
  selector: 'app-mortgage-property',
  templateUrl: './mortgage-property.component.html',
  styleUrls: ['./mortgage-property.component.css']
})
export class MortgagePropertyComponent implements OnInit {

  province = province;
  propertyType = propertyType;
  propertyUsage = propertyUsage;

  @Input() formGroup: FormGroup;

  mortgage: Mortgage;

  constructor(private mbs: MortgageBuilderService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup.addControl('propertyType', new FormControl());
    this.formGroup.addControl('propertyUsage', new FormControl());
    this.formGroup.addControl('streetAddress', new FormControl());
    this.formGroup.addControl('city', new FormControl());
    this.formGroup.addControl('province', new FormControl());
    this.formGroup.addControl('postalCode', new FormControl());
    this.formGroup.addControl('propertyTax', new FormControl());
    this.formGroup.addControl('condoFee', new FormControl());
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
    Object.assign(this.mortgage.propertyInfo, savePropertyInfo);
    return this.mortgage;
  }
}
