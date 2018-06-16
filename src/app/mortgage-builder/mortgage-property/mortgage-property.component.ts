import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
