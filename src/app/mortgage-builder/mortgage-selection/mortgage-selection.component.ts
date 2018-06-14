import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule,MatSelectModule } from '@angular/material';
import {MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-mortgage-selection',
  templateUrl: './mortgage-selection.component.html',
  styleUrls: ['./mortgage-selection.component.css']
})
export class MortgageSelectionComponent implements OnInit, OnChanges {
  value = '';
  homeprice ='';
  DownPaymentDollar= '';
  MortgageAmount = '';
  AmortPeriod_selected = '25';
  MortPaymentFreq_selected='Monthly';
  
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
