import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhihuModalPageComponent } from './zhihu-modal-page.component';

describe('ZhihuModalPageComponent', () => {
  let component: ZhihuModalPageComponent;
  let fixture: ComponentFixture<ZhihuModalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhihuModalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhihuModalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
