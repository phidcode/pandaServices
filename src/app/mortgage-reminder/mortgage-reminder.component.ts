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
    'date': [
      { type: 'required', message: 'Date is required.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Must be no less than 2 characters.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'pattern', message: 'Please enter a valid phone number.' }, 
      { type: 'minlength', message: 'Must be 10 digits.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'note': [
      { type: 'maxlength', message: 'Note must be less than 256 characters.' }
    ], 
    'province': [
      { type: 'required', message: 'Province is required.' }
    ]
  };

  province = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Québec',
    'Saskatchewan',
    'Yukon'
  ];

  button = 'Submit'; 

  constructor(private fb: FormBuilder, private af: AngularFirestore, public translate: TranslateService) {
    this.mortgageReminderForm = this.fb.group({
      date : new FormControl('', [Validators.required]),
      name : new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone : new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      note : new FormControl('', [Validators.maxLength(256)]),
      province : new FormControl('', Validators.required),
      chkNewsletter : new FormControl(false),
    });
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  submitMortgageReminder() {
    console.log(this.mortgageReminderForm.value);
    const {date, name, phone, email, note, province, chkNewsletter} = this.mortgageReminderForm.value;
    const submitDate = new Date(Date.now()).toLocaleString();
    const reminder = {submitDate, date, name, phone, email, note, province, chkNewsletter}; 
    this.af.collection(mortgageRemindersCollection).add(reminder).then();
    this.mortgageReminderForm.reset();
    this.mortgageReminderForm.disable();
    this.button = 'Reminder Sent';
  }

  ngOnInit() {
  }

}
