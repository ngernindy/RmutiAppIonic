import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtwoPage } from './imgtwo.page';

describe('ImgtwoPage', () => {
  let component: ImgtwoPage;
  let fixture: ComponentFixture<ImgtwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgtwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgtwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
