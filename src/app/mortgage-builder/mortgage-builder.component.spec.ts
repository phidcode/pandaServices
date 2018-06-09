import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageBuilderComponent } from './mortgage-builder.component';

describe('MortgageBuilderComponent', () => {
  let component: MortgageBuilderComponent;
  let fixture: ComponentFixture<MortgageBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
