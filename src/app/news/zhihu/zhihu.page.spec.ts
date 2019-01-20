import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhihuPage } from './zhihu.page';

describe('ZhihuPage', () => {
  let component: ZhihuPage;
  let fixture: ComponentFixture<ZhihuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhihuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhihuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
