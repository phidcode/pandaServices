import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from './data-model';
import { MortgageBuilderService } from './mortgage-builder.service';

@Component({
  selector: 'app-mortgage-builder',
  templateUrl: './mortgage-builder.component.html',
  styleUrls: ['./mortgage-builder.component.css']
})
export class MortgageBuilderComponent implements OnInit {

  isLinear = true;
  initialStep = 1;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private mbs: MortgageBuilderService) { }

  ngOnInit() {
    const mortgage: Mortgage = this.mbs.loadMortgageBuilder();
    const skipStepOne = mortgage !== undefined && mortgage.purpose.type !== null;
    this.initialStep = skipStepOne ? 1 : 0;
    this.createForm();
  }

  createForm() {
    console.log('createForm');
    this.firstFormGroup = new FormGroup({});

    // this.firstFormGroup.addControl('selectedPurpose', new FormControl());
    // this.firstFormGroup.addControl('selectedType', new FormControl());
    // this.firstFormGroup.addControl('selectedTerm', new FormControl());
    // this.firstFormGroup.addControl('selectedOccupancy', new FormControl());
    // this.firstFormGroup.addControl('selectedCreditScore', new FormControl());

    // const mortgage: Mortgage = this.mbs.loadMortgageBuilder();
    // if (mortgage !== undefined) {
    //   const m = this.firstFormGroup.value;
    //   m.selectedPurpose = mortgage.purpose.type;
    //   m.selectedType = mortgage.type;
    //   m.selectedTerm = mortgage.term;
    //   m.selectedOccupancy = mortgage.occupancy;
    //   m.selectedCreditScore = mortgage.creditScore;
    // }

    console.log(this.firstFormGroup.value);
    this.secondFormGroup = new FormGroup({});
    this.thirdFormGroup = new FormGroup({});
    this.fourthFormGroup = new FormGroup({});
    this.fifthFormGroup = new FormGroup({});
  }
}
