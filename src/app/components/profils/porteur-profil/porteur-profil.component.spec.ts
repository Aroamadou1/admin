import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurProfilComponent } from './porteur-profil.component';

describe('PorteurProfilComponent', () => {
  let component: PorteurProfilComponent;
  let fixture: ComponentFixture<PorteurProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorteurProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteurProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
