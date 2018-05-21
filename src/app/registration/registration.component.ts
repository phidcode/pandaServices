import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'; // Cloud Database
import { AngularFireDatabase } from 'angularfire2/database'; // Realtime Database
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // items: Observable<any>;

  // constructor(db: AngularFirestore, db2: AngularFireDatabase) {
  //   this.items = db.collection('items').valueChanges();
  // }

  constructor() {

  }

  ngOnInit() {
  }

}
