import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { purpose, type, term, occupancy, creditScore } from '../mortgage-builder/constants';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../mortgage-builder/data-model';
import { MortgageBuilderService } from '../mortgage-builder/mortgage-builder.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  purpose = purpose;
  type = type;
  term = term;
  occupancy = occupancy;
  creditScore = creditScore;

  formGroup: FormGroup;

  constructor(private meta: Meta, title: Title, private mbs: MortgageBuilderService, public translate: TranslateService) {
    title.setTitle('MeeFinancial Inc., Your Digital Mortgage');
    // this.meta.addTag({ name: 'description', content: 'Buying a home? We can help. Get pre-approved and qualify for a mortgage.' }, true);
    // this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    // this.meta.addTag({ name: 'keywords', content: 'mortgage, toronto mortgage, canada mortgage, DIY mortgage, real estate, buying home, ontario real estate, toronto mortgage, diy mortgage' }, true);

    this.meta.addTags([
      { name: 'description', content: 'How to use Angular 4 meta service' },
      { name: 'author', content: 'talkingdotnet' },
      { name: 'keywords', content: 'Angular, Meta Service' }
    ]);

    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({});
    this.formGroup.addControl('selectedPurpose', new FormControl());
    this.formGroup.addControl('selectedType', new FormControl());
    this.formGroup.addControl('selectedTerm', new FormControl());
    this.formGroup.addControl('selectedOccupancy', new FormControl());
    this.formGroup.addControl('selectedCreditScore', new FormControl());
  }

  save() {
    const mortgageBuilder = this.mortgageBuilder();
    this.mbs.saveMortgageBuilder(mortgageBuilder);
  }

  mortgageBuilder() {
    const m = this.formGroup.value;
    const saveMortgage: Mortgage = {
      purpose: {
        type: m.selectedPurpose,
      },
      type: m.selectedType,
      term: m.selectedTerm,
      occupancy: m.selectedOccupancy,
      creditScore: m.selectedCreditScore,
      images: []
    };

    return saveMortgage;
  }
}
