import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeursComponent } from './vendeurs.component';

describe('VendeursComponent', () => {
  let component: VendeursComponent;
  let fixture: ComponentFixture<VendeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
