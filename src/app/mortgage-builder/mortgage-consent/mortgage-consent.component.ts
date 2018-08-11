import { Component, OnInit, OnChanges, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { purpose, type, term, occupancy, creditScore } from '../constants';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
import { FileUpload } from '../../upload/fileupload';
import { MortgageBuilderService } from '../mortgage-builder.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mortgage-consent',
  templateUrl: './mortgage-consent.component.html',
  styleUrls: ['./mortgage-consent.component.css']
})
export class MortgageConsentComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;
  mortgage: Mortgage;
  fileUploadList: FileUpload[] = [];

  constructor(private mbs: MortgageBuilderService, public dialog: MatDialog, public translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.createForm();
    this.resetForm();
  }

  ngOnChanges() {
    this.resetForm();
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
    // console.log(mortgageBuilder);
    const dialogRef = this.dialog.open(MortgageConsentDialogComponent, {
      width: '250px',
      data: { status: 'SUCCESS', mortgage: this.mortgage }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Redirect back to homepage');
      this.mbs.saveMortgageBuilder(undefined);
      this.router.navigate(['/home']);
    });
  }

  mortgageBuilder() {
    const m = this.formGroup.value;
    // console.log(this.fileUploadList);
    // console.log(this.mortgage);
    this.mortgage.images = this.fileUploadList;
    // console.log(this.mortgage);
    return this.mortgage;
  }
}

@Component({
  selector: 'app-mortgage-consent-dialog',
  templateUrl: './mortgage-consent-dialog.component.html',
})
export class MortgageConsentDialogComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor(
    public dialogRef: MatDialogRef<MortgageConsentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    const mortgage: Mortgage = this.data.mortgage;
    this.firstName = mortgage.personalInfo.firstName;
    this.lastName = mortgage.personalInfo.lastName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
