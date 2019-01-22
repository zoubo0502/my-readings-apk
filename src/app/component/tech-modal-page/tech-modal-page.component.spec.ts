import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechModalPageComponent } from './tech-modal-page.component';

describe('TechModalPageComponent', () => {
  let component: TechModalPageComponent;
  let fixture: ComponentFixture<TechModalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechModalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechModalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
