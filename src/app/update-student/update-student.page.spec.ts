import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentPage } from './update-student.page';

describe('UpdateStudentPage', () => {
  let component: UpdateStudentPage;
  let fixture: ComponentFixture<UpdateStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
