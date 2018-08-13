import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { mortgageRemindersCollection } from '../app.database';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mortgage-reminder',
  templateUrl: './mortgage-reminder.component.html',
  styleUrls: ['./mortgage-reminder.component.css']
})
export class MortgageReminderComponent implements OnInit {

  mortgageReminderForm: FormGroup;

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  reminder_validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Must be no less than 2 characters.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'pattern', message: 'Please enter a valid phone number.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'note': [
      { type: 'maxlength', message: 'Note must be less than 256 characters.' }
    ]
  }

  constructor(private fb: FormBuilder, private af: AngularFirestore, public translate: TranslateService) {
    this.mortgageReminderForm = this.fb.group({
      date : new FormControl('', [Validators.required]),
      name : new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone : new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      note : new FormControl('', [Validators.maxLength(256)]),
      chkNewsletter : new FormControl(false),
    });
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  submitMortgageReminder() {
    console.log(this.mortgageReminderForm.value);
    const {date, name, phone, email, note, chkNewsletter} = this.mortgageReminderForm.value;
    const submitDate = new Date(Date.now()).toLocaleString();
    const reminder = {submitDate, date, name, phone, email, note, chkNewsletter}; 
    this.af.collection(mortgageRemindersCollection).add(reminder).then();
    this.mortgageReminderForm.reset();
  }

  // name = new FormControl('', [Validators.required, Validators.minLength(2)]);
  // phone = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // note = new FormControl('', [Validators.maxLength(256)]);
  // chkNewsletter = false;

  // getNameErrorMessage() {
  //   console.log(this.name.errors);
  //   return this.name.hasError('required') ? 'You must enter a value' :
  //       this.name.hasError('minLength') ? 'Must be no less than 2 characters' :
  //           '';
  // }

  // getPhoneErrorMessage() {
  //   console.log(this.phone.errors);
  //   return this.phone.hasError('required') ? 'You must enter a value' :
  //       this.phone.hasError('pattern') ? 'Not a valid phone number' :
  //       // this.phone.hasError('minLength') ? 'Must be 10 digits' :
  //       // this.phone.hasError('maxLength') ? 'Must be 10 digits' :
  //           '';
  // }

  // getEmailErrorMessage() {
  //   console.log(this.email.errors);
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  // getNoteErrorMessage() {
  //   console.log(this.note.errors);
  //   return this.note.hasError('maxLength') ? 'Must be no more than 256 characters' :
  //           '';
  // }

  ngOnInit() {
  }

}
