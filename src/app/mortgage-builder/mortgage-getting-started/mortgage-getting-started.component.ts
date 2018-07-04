import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { purpose, type, term, occupancy, creditScore } from '../constants';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
import { MortgageBuilderService } from '../mortgage-builder.service';

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

  mortgage: Mortgage;

  constructor(private fb: FormBuilder, private mbs: MortgageBuilderService) { }

  ngOnInit() {
    this.createForm();
    this.resetForm();
    console.log(this.formGroup.value);
  }

  createForm() {
    this.formGroup.addControl('selectedPurpose', new FormControl());
    this.formGroup.addControl('selectedType', new FormControl());
    this.formGroup.addControl('selectedTerm', new FormControl());
    this.formGroup.addControl('selectedOccupancy', new FormControl());
    this.formGroup.addControl('selectedCreditScore', new FormControl());
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    if (this.mortgage !== undefined) {
      this.formGroup.reset({
        selectedPurpose: this.mortgage.purpose.type,
        selectedType: this.mortgage.type,
        selectedTerm: this.mortgage.term,
        selectedOccupancy: this.mortgage.occupancy,
        selectedCreditScore: this.mortgage.creditScore,
      });
    }
  }

  ngOnChanges() {
    this.resetForm();
    console.log(this.formGroup.value);
  }

  save() {
    const mortgageBuilder = this.mortgageBuilder();
    this.mbs.saveMortgageBuilder(mortgageBuilder);
    console.log(mortgageBuilder);
  }

  mortgageBuilder() {
    const m = this.formGroup.value;
    const saveMortgage: Mortgage = {
      purpose: {
        type: m.selectedPurpose,
      },
      type: m.selectedType,
      term: m.selectedTerm,
      occupancy: m.selectedOccupancy,
      creditScore: m.selectedCreditScore,
    };
    if (this.mortgage === undefined) {
      return Object.assign({}, saveMortgage);
    }
    return Object.assign(this.mortgage, saveMortgage);
  }

}
