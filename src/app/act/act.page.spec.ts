import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActPage } from './act.page';

describe('ActPage', () => {
  let component: ActPage;
  let fixture: ComponentFixture<ActPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
