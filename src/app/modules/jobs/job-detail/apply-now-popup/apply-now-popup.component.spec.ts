import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNowPopupComponent } from './apply-now-popup.component';

describe('ApplyNowPopupComponent', () => {
  let component: ApplyNowPopupComponent;
  let fixture: ComponentFixture<ApplyNowPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyNowPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyNowPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
