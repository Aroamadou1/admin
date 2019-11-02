import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinierFormComponent } from './magasinier-form.component';

describe('MagasinierFormComponent', () => {
  let component: MagasinierFormComponent;
  let fixture: ComponentFixture<MagasinierFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasinierFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasinierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
