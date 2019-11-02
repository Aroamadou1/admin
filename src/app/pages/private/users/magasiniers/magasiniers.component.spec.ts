import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasiniersComponent } from './magasiniers.component';

describe('MagasiniersComponent', () => {
  let component: MagasiniersComponent;
  let fixture: ComponentFixture<MagasiniersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasiniersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasiniersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
