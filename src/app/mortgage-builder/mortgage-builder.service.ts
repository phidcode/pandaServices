import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class MortgageBuilderService {

  private mortgageData: BehaviorSubject<Mortgage>;
  private mortgage: Mortgage;

  constructor() { }

  saveMortgageBuilder(mortgage: Mortgage) {
    this.mortgage = mortgage;
  }

  loadMortgageBuilder(): Mortgage {
    return this.mortgage;
  }
}
