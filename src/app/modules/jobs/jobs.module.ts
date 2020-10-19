import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { JobRoutingModule } from './jobs-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplyNowPopupComponent } from './job-detail/apply-now-popup/apply-now-popup.component';



@NgModule({
  declarations: [
    JobsComponent,
    JobDetailComponent,
    ApplyNowPopupComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobsModule { }
