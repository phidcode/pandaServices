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
    const mortgage: Mortgage = this.mbs.loadMortgageBuilder();
    if (mortgage !== undefined) {
      this.formGroup.reset({
        selectedPurpose: mortgage.purpose.type,
        selectedType: mortgage.type,
        selectedTerm: mortgage.term,
        selectedOccupancy: mortgage.occupancy,
        selectedCreditScore: mortgage.creditScore,
      });
    }
  }

  ngOnChanges() {
    this.resetForm();
    console.log(this.formGroup.value);
  }


}
