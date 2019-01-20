import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPage } from './tech.page';

describe('TechPage', () => {
  let component: TechPage;
  let fixture: ComponentFixture<TechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
