import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../registration/data-model';
import { registrationCollection, messagesCollection } from '../app.database';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  registrationCollectionRef: AngularFirestoreCollection<User>;
  messageCollectionRef: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.registrationCollectionRef = afs.collection<User>(registrationCollection);
    this.messageCollectionRef = afs.collection<any>(messagesCollection);
  }

  getAllRegisteredUserInfo(): Observable<User[]> {
    return this.registrationCollectionRef.valueChanges();
  }

  getAllMessagesInfo(): Observable<any[]> {
    return this.messageCollectionRef.valueChanges();
  }
}
