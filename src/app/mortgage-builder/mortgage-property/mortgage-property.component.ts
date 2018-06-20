import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

const province = [
  'Alberta',
  'Briish Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon'
];
const propertyType = [
  'Condo or Apartment',
  'Townhouse',
  'Semi-Detached',
  'Detached'
];

const propertyUsage = [
  'Principal Residence',
  'Rental'
];

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
