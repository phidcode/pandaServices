import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mortgage-getting-started',
  templateUrl: './mortgage-getting-started.component.html',
  styleUrls: ['./mortgage-getting-started.component.css']
})
export class MortgageGettingStartedComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
