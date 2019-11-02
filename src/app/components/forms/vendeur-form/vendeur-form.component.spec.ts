import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurFormComponent } from './vendeur-form.component';

describe('VendeurFormComponent', () => {
  let component: VendeurFormComponent;
  let fixture: ComponentFixture<VendeurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
