import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusinfoComponent } from './contactusinfo.component';

describe('ContactusinfoComponent', () => {
  let component: ContactusinfoComponent;
  let fixture: ComponentFixture<ContactusinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
