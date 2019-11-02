import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurProfilComponent } from './vendeur-profil.component';

describe('VendeurProfilComponent', () => {
  let component: VendeurProfilComponent;
  let fixture: ComponentFixture<VendeurProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
