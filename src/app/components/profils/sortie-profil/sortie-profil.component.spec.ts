import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieProfilComponent } from './sortie-profil.component';

describe('SortieProfilComponent', () => {
  let component: SortieProfilComponent;
  let fixture: ComponentFixture<SortieProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortieProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortieProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
