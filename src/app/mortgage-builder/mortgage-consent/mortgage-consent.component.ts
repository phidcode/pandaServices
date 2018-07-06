import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { purpose, type, term, occupancy, creditScore } from '../constants';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
import { MortgageBuilderService } from '../mortgage-builder.service';

@Component({
  selector: 'app-mortgage-consent',
  templateUrl: './mortgage-consent.component.html',
  styleUrls: ['./mortgage-consent.component.css']
})
export class MortgageConsentComponent implements OnInit {

  @Input() formGroup: FormGroup;
  mortgage: Mortgage;

  constructor(private mbs: MortgageBuilderService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup.addControl('consent', new FormControl('', Validators.required));
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
  }

  consent() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    const mortgageBuilder = this.mortgageBuilder();
    this.mbs.saveMortgageBuilderToFireStore(mortgageBuilder);
    console.log(mortgageBuilder);
  }

  mortgageBuilder() {
    const m = this.formGroup.value;
    return this.mortgage;
  }
}
