import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registrationCollection: AngularFirestoreCollection<User>;
  registrations: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.registrationCollection = afs.collection<User>('registration');
    // this.registrations = this.registrationCollection.valueChanges();
  }

  addItem(user: User) {
    this.registrationCollection.add(user);
  }
}
