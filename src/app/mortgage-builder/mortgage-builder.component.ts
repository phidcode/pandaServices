import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mortgage-builder',
  templateUrl: './mortgage-builder.component.html',
  styleUrls: ['./mortgage-builder.component.css']
})
export class MortgageBuilderComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      ctrl: new FormControl(),
    });

    this.secondFormGroup = new FormGroup({
      ctrl: new FormControl(),
    });

    this.thirdFormGroup = new FormGroup({
      ctrl: new FormControl(),
    });

    this.fourthFormGroup = new FormGroup({
      ctrl: new FormControl(),
    });
  }

}
