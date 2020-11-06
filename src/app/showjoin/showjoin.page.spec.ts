import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowjoinPage } from './showjoin.page';

describe('ShowjoinPage', () => {
  let component: ShowjoinPage;
  let fixture: ComponentFixture<ShowjoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowjoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowjoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
