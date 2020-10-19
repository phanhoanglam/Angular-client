import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMapsComponent } from './job-maps.component';

describe('JobMapsComponent', () => {
  let component: JobMapsComponent;
  let fixture: ComponentFixture<JobMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
