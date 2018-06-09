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

  constructor() { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl(),
    });

    this.secondFormGroup = new FormGroup({
      secondCtrl: new FormControl(),
    });
  }

}
