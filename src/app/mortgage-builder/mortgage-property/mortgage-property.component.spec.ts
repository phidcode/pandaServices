import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagePropertyComponent } from './mortgage-property.component';

describe('MortgagePropertyComponent', () => {
  let component: MortgagePropertyComponent;
  let fixture: ComponentFixture<MortgagePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgagePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
