import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProfilComponent } from './cat-profil.component';

describe('CatProfilComponent', () => {
  let component: CatProfilComponent;
  let fixture: ComponentFixture<CatProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
