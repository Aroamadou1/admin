import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVenteComponent } from './all-vente.component';

describe('AllVenteComponent', () => {
  let component: AllVenteComponent;
  let fixture: ComponentFixture<AllVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
