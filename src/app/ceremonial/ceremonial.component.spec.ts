import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonialComponent } from './ceremonial.component';

describe('CeremonialComponent', () => {
  let component: CeremonialComponent;
  let fixture: ComponentFixture<CeremonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeremonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeremonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
