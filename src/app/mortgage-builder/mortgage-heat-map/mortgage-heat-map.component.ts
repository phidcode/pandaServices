import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mortgage-heat-map',
  templateUrl: './mortgage-heat-map.component.html',
  styleUrls: ['./mortgage-heat-map.component.css']
})
export class MortgageHeatMapComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
