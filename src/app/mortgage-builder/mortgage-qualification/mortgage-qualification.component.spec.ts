import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageQualificationComponent } from './mortgage-qualification.component';

describe('MortgageQualificationComponent', () => {
  let component: MortgageQualificationComponent;
  let fixture: ComponentFixture<MortgageQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
