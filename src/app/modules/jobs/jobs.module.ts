import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { JobRoutingModule } from './jobs-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplyNowPopupComponent } from './job-detail/apply-now-popup/apply-now-popup.component';
import { JwPaginationComponent } from 'app/shared/directives/pagination/JwPagination';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    JobsComponent,
    JobDetailComponent,
    ApplyNowPopupComponent,
    JwPaginationComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    MatTooltipModule
  ]
})
export class JobsModule { }
