import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaModalPageComponent } from './nba-modal-page.component';

describe('NbaModalPageComponent', () => {
  let component: NbaModalPageComponent;
  let fixture: ComponentFixture<NbaModalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaModalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaModalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
