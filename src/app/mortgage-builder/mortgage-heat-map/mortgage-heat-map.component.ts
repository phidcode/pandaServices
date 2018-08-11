import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo, LenderInfo } from '../data-model';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private mbs: MortgageBuilderService, public translate: TranslateService) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  displayedColumns: string[] = ['term'];

  lenderA: Lender[] = [
    { term: 1, type: 'Fixed', rate: '2.79%' },
    { term: 2, type: 'Fixed', rate: '3.14%' },
    { term: 3, type: 'Fixed', rate: '3.20%' },
    { term: 4, type: 'Fixed', rate: '2.89% (Most Common)' },
    { term: 5, type: 'Fixed', rate: '3.04%' },
    { term: 3, type: 'Variable', rate: '3.56%' },
    { term: 5, type: 'Variable', rate: '2.46%' },
  ];

  lenderB: Lender[] = [
    { term: 1, type: 'Fixed', rate: '3.09%' },
    { term: 2, type: 'Fixed', rate: '3.34%' },
    { term: 3, type: 'Fixed', rate: '3.53%' },
    { term: 4, type: 'Fixed', rate: '3.09%' },
    { term: 5, type: 'Fixed', rate: '4.53%' },
    { term: 3, type: 'Variable', rate: '3.50%' },
    { term: 5, type: 'Variable', rate: '3.20%' },
  ];

  lenderC: Lender[] = [
    { term: 1, type: 'Fixed', rate: '7.33%' },
    { term: 2, type: 'Fixed', rate: 'Call Us' },
  ];

  ngOnInit() {
    this.resetForm();
  }

  ngOnChanges() {
    this.resetForm();
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
  }

  save(lender: string) {
    this.mortgage = this.mbs.loadMortgageBuilder();
    const mortgageBuilder = this.mortgageBuilder(lender);
    this.mbs.saveMortgageBuilder(mortgageBuilder);
    console.log(lender);
  }

  mortgageBuilder(lender: string) {
    const saveLenderInfo: LenderInfo = {
      type: lender
    };
    if (this.mortgage.lenderInfo === undefined) {
      this.mortgage.lenderInfo = saveLenderInfo;
    } else {
      Object.assign(this.mortgage.lenderInfo, saveLenderInfo);
    }
    return this.mortgage;
  }
}
