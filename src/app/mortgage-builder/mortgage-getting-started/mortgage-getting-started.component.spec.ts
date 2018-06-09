import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageGettingStartedComponent } from './mortgage-getting-started.component';

describe('MortgageGettingStartedComponent', () => {
  let component: MortgageGettingStartedComponent;
  let fixture: ComponentFixture<MortgageGettingStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageGettingStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
