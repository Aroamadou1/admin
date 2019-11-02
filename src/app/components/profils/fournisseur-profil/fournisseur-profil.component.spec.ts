import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurProfilComponent } from './fournisseur-profil.component';

describe('FournisseurProfilComponent', () => {
  let component: FournisseurProfilComponent;
  let fixture: ComponentFixture<FournisseurProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
