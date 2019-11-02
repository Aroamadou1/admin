import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayVenteComponent } from './today-vente.component';

describe('TodayVenteComponent', () => {
  let component: TodayVenteComponent;
  let fixture: ComponentFixture<TodayVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
