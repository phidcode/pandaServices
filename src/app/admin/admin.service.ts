import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../registration/data-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  registrationCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) {
    this.registrationCollection = afs.collection<User>('registration');
  }

  getAllRegisteredUserInfo(): Observable<User[]> {
    return this.registrationCollection.valueChanges();
  }
}
