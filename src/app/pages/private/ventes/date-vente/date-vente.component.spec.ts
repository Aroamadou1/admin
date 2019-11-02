import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateVenteComponent } from './date-vente.component';

describe('DateVenteComponent', () => {
  let component: DateVenteComponent;
  let fixture: ComponentFixture<DateVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
