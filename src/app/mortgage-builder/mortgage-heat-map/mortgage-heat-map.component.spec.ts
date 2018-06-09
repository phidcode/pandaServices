import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageHeatMapComponent } from './mortgage-heat-map.component';

describe('MortgageHeatMapComponent', () => {
  let component: MortgageHeatMapComponent;
  let fixture: ComponentFixture<MortgageHeatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageHeatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
