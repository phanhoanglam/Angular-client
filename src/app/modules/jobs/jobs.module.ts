import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { JobRoutingModule } from './jobs-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';



@NgModule({
  declarations: [
    JobsComponent,
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobsModule { }
