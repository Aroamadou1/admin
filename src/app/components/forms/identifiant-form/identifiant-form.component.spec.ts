import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifiantFormComponent } from './identifiant-form.component';

describe('IdentifiantFormComponent', () => {
  let component: IdentifiantFormComponent;
  let fixture: ComponentFixture<IdentifiantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifiantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifiantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
