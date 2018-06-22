import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MortgageBuilderService {

  private mortgageData: BehaviorSubject<string>;

  constructor() { }

  saveMortgageBuilder() {

  }

  loadMortgageBuilder() {

  }
}
