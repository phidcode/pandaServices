import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from './data-model';
import { registrationCollection } from '../app.database';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  collection: AngularFirestoreCollection<User>;
  registrations: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.collection = afs.collection<User>(registrationCollection);
    // this.registrations = this.collection.valueChanges();
  }

  save(user: User) {
    console.log('Saving User:', user);
    this.collection.add(user);
  }
}
