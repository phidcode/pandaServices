import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { province, propertyType, propertyUsage } from '../constants';
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

  constructor() { }

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
}
