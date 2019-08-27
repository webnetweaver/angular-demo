import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Interview2Component } from './interview2.component';

describe('Interview2Component', () => {
  let component: Interview2Component;
  let fixture: ComponentFixture<Interview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Interview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Interview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
