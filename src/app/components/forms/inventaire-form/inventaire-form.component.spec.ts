import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireFormComponent } from './inventaire-form.component';

describe('InventaireFormComponent', () => {
  let component: InventaireFormComponent;
  let fixture: ComponentFixture<InventaireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
