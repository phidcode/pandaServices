import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { purpose, type, term, occupancy, creditScore } from '../constants';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
import { FileUpload } from '../../upload/fileupload';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { log } from 'util';
import { ReadModelAsStringFloatingFilterComp } from '../../../../node_modules/ag-grid/dist/lib/filter/floatingFilter';

@Component({
  selector: 'app-mortgage-consent',
  templateUrl: './mortgage-consent.component.html',
  styleUrls: ['./mortgage-consent.component.css']
})
export class MortgageConsentComponent implements OnInit {

  @Input() formGroup: FormGroup;
  mortgage: Mortgage;
  fileUploadList: FileUpload[] = [];

  constructor(private mbs: MortgageBuilderService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup.addControl('consent', new FormControl('', Validators.required));
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
  }

  consent() {
    this.mortgage = this.mbs.loadMortgageBuilder();
    const mortgageBuilder = this.mortgageBuilder();
    this.mbs.saveMortgageBuilderToFireStore(mortgageBuilder);
    console.log(mortgageBuilder);
  }

  mortgageBuilder() {
    const m = this.formGroup.value;
    console.log(this.fileUploadList);
    console.log(this.mortgage);
    // this.mortgage.images = this.fileUploadList;
    console.log(this.mortgage);
    return this.mortgage;
  }
}
