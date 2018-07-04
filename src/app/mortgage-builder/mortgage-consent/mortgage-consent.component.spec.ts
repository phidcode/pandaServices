import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageConsentComponent } from './mortgage-consent.component';

describe('MortgageConsentComponent', () => {
  let component: MortgageConsentComponent;
  let fixture: ComponentFixture<MortgageConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
