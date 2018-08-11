import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from './data-model';
import { MortgageBuilderService } from './mortgage-builder.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mortgage-builder',
  templateUrl: './mortgage-builder.component.html',
  styleUrls: ['./mortgage-builder.component.css']
})
export class MortgageBuilderComponent implements OnInit {

  isLinear = true;
  initialStep = 0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  mortgage: Mortgage;

  constructor(private mbs: MortgageBuilderService, public translate: TranslateService) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    const mortgage: Mortgage = this.mbs.loadMortgageBuilder();
    const skipStepOne = mortgage !== undefined && mortgage.purpose.type !== null;
    this.initialStep = skipStepOne ? 1 : 0;
    console.log('Initial Step:' + this.initialStep);
    this.createForm();
  }

  createForm() {
    // console.log('createForm');
    this.firstFormGroup = new FormGroup({});
    this.secondFormGroup = new FormGroup({});
    this.thirdFormGroup = new FormGroup({});
    this.fourthFormGroup = new FormGroup({});
    this.fifthFormGroup = new FormGroup({});
    this.sixthFormGroup = new FormGroup({});
  }

  ngOnChange() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    // console.log(this.mortgage);
  }
}
