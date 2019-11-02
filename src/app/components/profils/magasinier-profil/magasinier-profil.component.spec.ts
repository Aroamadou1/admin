import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinierProfilComponent } from './magasinier-profil.component';

describe('MagasinierProfilComponent', () => {
  let component: MagasinierProfilComponent;
  let fixture: ComponentFixture<MagasinierProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasinierProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasinierProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
