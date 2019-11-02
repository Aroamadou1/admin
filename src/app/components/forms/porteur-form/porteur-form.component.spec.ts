import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurFormComponent } from './porteur-form.component';

describe('PorteurFormComponent', () => {
  let component: PorteurFormComponent;
  let fixture: ComponentFixture<PorteurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorteurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
