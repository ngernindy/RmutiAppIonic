import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgonePage } from './imgone.page';

describe('ImgonePage', () => {
  let component: ImgonePage;
  let fixture: ComponentFixture<ImgonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
