import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageSelectionComponent } from './mortgage-selection.component';

describe('MortgageSelectionComponent', () => {
  let component: MortgageSelectionComponent;
  let fixture: ComponentFixture<MortgageSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
