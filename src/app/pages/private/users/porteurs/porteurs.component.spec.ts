import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteursComponent } from './porteurs.component';

describe('PorteursComponent', () => {
  let component: PorteursComponent;
  let fixture: ComponentFixture<PorteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
