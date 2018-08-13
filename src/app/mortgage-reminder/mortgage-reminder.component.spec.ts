import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageReminderComponent } from './mortgage-reminder.component';

describe('MortgageReminderComponent', () => {
  let component: MortgageReminderComponent;
  let fixture: ComponentFixture<MortgageReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
