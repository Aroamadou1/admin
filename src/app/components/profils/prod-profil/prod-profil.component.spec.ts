import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdProfilComponent } from './prod-profil.component';

describe('ProdProfilComponent', () => {
  let component: ProdProfilComponent;
  let fixture: ComponentFixture<ProdProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
