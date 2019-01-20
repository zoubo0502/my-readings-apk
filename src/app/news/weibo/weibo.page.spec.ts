import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeiboPage } from './weibo.page';

describe('WeiboPage', () => {
  let component: WeiboPage;
  let fixture: ComponentFixture<WeiboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeiboPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeiboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
