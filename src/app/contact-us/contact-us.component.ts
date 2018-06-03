import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { messagesCollection } from '../app.database';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;
  name: string;
  msg_sent = false;

  constructor(private fb: FormBuilder, private af: AngularFirestore) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.msg_sent = false;
    const {name, email, message} = this.form.value;
    const date = new Date(Date.now()).toLocaleString();
    const request = {date, name, email, message};
    this.af.collection(messagesCollection).add(request).then();
    this.form.reset();
    this.msg_sent = true;
    //setTimeout(function() { this.msg_sent = true; }, 5000);
  }

  ngOnInit() { }

}
