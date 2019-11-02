import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeProfilComponent } from './entree-profil.component';

describe('EntreeProfilComponent', () => {
  let component: EntreeProfilComponent;
  let fixture: ComponentFixture<EntreeProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreeProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
