import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowunitPage } from './showunit.page';

describe('ShowunitPage', () => {
  let component: ShowunitPage;
  let fixture: ComponentFixture<ShowunitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowunitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowunitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
