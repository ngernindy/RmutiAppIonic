import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeactPage } from './seeact.page';

describe('SeeactPage', () => {
  let component: SeeactPage;
  let fixture: ComponentFixture<SeeactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
