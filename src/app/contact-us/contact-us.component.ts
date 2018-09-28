import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { messagesCollection } from '../app.database';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;
  msg_sent = false;

  contact_us_validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Must be no less than 2 characters.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'message': [
      { type: 'required', message: 'Message is required.' },
      { type: 'minlength', message: 'Message must be no less than 10 characters.' }
    ], 
  };

  button = 'Submit'; 

  constructor(private fb: FormBuilder, private af: AngularFirestore, public translate: TranslateService) {
    this.createForm();
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.msg_sent = false;
    console.log(this.form.value); 
    const {name, email, message} = this.form.value;
    const date = new Date(Date.now()).toLocaleString();
    const request = {date, name, email, message};
    this.af.collection(messagesCollection).add(request).then();
    this.form.reset();
    this.form.disable();
    this.button = 'Message Sent'; 
  }

  ngOnInit() { }

}
