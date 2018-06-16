import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface MortgageOption {
  title: string;
  value: string;
}
const purpose: MortgageOption[] = [
  { title: 'Purchase', value: 'purchase' },
  { title: 'Renewal', value: 'renewal' },
  { title: 'Refinance', value: 'refinance' },
];

const type: MortgageOption[] = [
  { title: 'Fixed', value: 'fixed' },
  { title: 'Variable', value: 'variable' },
  { title: 'Variable-Open', value: 'variableOpen' },
  { title: 'Fixed-Open', value: 'fixedOpen' },
  { title: 'Undecided', value: 'undecided' }
];

const term: MortgageOption[] = [
  { title: '1', value: '1' },
  { title: '2', value: '2' },
  { title: '3', value: '3' },
  { title: '4', value: '4' },
  { title: '5', value: '5' },
];

const occupancy: MortgageOption[] = [
  { title: 'Owner-Occupied', value: 'ownerOccupied' },
  { title: 'Tenant-Occupied', value: 'tenantOccupied' },
];

const creditScore: MortgageOption[] = [
  { title: '600 to 649', value: '600to649' },
  { title: '650 to 699', value: '650to699' },
  { title: '700 to 749', value: '700to749' },
  { title: '750+', value: '750over' },
  { title: 'Not sure', value: 'notSure' }
];

@Component({
  selector: 'app-mortgage-getting-started',
  templateUrl: './mortgage-getting-started.component.html',
  styleUrls: ['./mortgage-getting-started.component.css']
})
export class MortgageGettingStartedComponent implements OnInit, OnChanges {

  purpose = purpose;
  type = type;
  term = term;
  occupancy = occupancy;
  creditScore = creditScore;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
