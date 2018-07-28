import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MortgageBuilderService} from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';


export interface Lender {
  term: number; 
  type: string; 
  rate: string;
}

@Component({
  selector: 'app-mortgage-heat-map',
  templateUrl: './mortgage-heat-map.component.html',
  styleUrls: ['./mortgage-heat-map.component.css']
})

export class MortgageHeatMapComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;

  mortgage: Mortgage;

  constructor(private mbs: MortgageBuilderService) { }

  displayedColumns: string[] = ['term', 'type', 'rate'];

  lenderA: Lender[] = [
    {term: 1, type: 'Fixed', rate: '2.79%'}, 
    {term: 2, type: 'Fixed', rate: '3.14%'}, 
    {term: 3, type: 'Fixed', rate: '3.20%'}, 
    {term: 4, type: 'Fixed', rate: '2.89%'}, 
    {term: 5, type: 'Fixed', rate: '3.04%'}, 
    {term: 3, type: 'Variable', rate: '3.56%'}, 
    {term: 5, type: 'Variable', rate: '2.46%'}, 
  ]

  lenderB: Lender[] = [
    {term: 1, type: 'Fixed', rate: '3.09%'}, 
    {term: 2, type: 'Fixed', rate: '3.34%'}, 
    {term: 3, type: 'Fixed', rate: '3.53%'}, 
    {term: 4, type: 'Fixed', rate: '3.09%'}, 
    {term: 5, type: 'Fixed', rate: '4.53%'}, 
    {term: 3, type: 'Variable', rate: '3.50%'}, 
    {term: 5, type: 'Variable', rate: '3.20%'}, 
  ]

  lenderC: Lender[] = [
    {term: 1, type: 'Fixed', rate: '7.33%'}, 
    {term: 2, type: 'Fixed', rate: 'Call Us'}, 
  ]

  ngOnInit() {
  }

  ngOnChanges() {
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
  }
}
