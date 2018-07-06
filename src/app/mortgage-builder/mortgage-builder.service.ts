import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from './data-model';
import { mortgageCollection } from '../app.database';

@Injectable({
  providedIn: 'root'
})
export class MortgageBuilderService {

  collection: AngularFirestoreCollection<Mortgage>;

  private mortgageData: BehaviorSubject<Mortgage>;
  private mortgage: Mortgage;

  constructor(private afs: AngularFirestore) {
    this.collection = afs.collection<Mortgage>(mortgageCollection);
  }

  saveMortgageBuilder(mortgage: Mortgage) {
    this.mortgage = mortgage;
  }

  loadMortgageBuilder(): Mortgage {
    return this.mortgage;
  }

  saveMortgageBuilderToFireStore(mortgage: Mortgage) {
    console.log('Saving mortgage to FireStore');
    this.collection.add(mortgage);
  }
}
