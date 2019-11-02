import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireProfilComponent } from './inventaire-profil.component';

describe('InventaireProfilComponent', () => {
  let component: InventaireProfilComponent;
  let fixture: ComponentFixture<InventaireProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
