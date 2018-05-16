import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntarioLandTransferTaxComponent } from './ontario-land-transfer-tax.component';

describe('OntarioLandTransferTaxComponent', () => {
  let component: OntarioLandTransferTaxComponent;
  let fixture: ComponentFixture<OntarioLandTransferTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntarioLandTransferTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntarioLandTransferTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
