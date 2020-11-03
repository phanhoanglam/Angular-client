import { RatingComponent } from './../../shared/component/rating/rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { JobRoutingModule } from './jobs-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplyNowPopupComponent } from './job-detail/apply-now-popup/apply-now-popup.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'app/shared/component/pagination/JwPagination';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    JobsComponent,
    JobDetailComponent,
    ApplyNowPopupComponent,
    JwPaginationComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    MatTooltipModule,
    FormsModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1T5A0ce0dJVYavhzTWH4w-yJ243KuTTI',
      libraries: ['places'],
    }),
  ]
})
export class JobsModule { }
