import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpslocationPage } from './gpslocation.page';

describe('GpslocationPage', () => {
  let component: GpslocationPage;
  let fixture: ComponentFixture<GpslocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpslocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpslocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
