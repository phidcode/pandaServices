import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.firstFormGroup = new FormGroup({});
    this.secondFormGroup = new FormGroup({});
    this.thirdFormGroup = new FormGroup({});
    this.fourthFormGroup = new FormGroup({});
    this.fifthFormGroup = new FormGroup({});
  }
}
