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

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup.addControl('agree', new FormControl());
  }
}
