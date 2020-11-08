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
import { MatSelectModule } from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatInputModule} from '@angular/material/input';

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
    MatSelectModule,
    MatInputModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyBYiHfMlwJdYaxFTkZQAk57bZaLPPW35TY',
      libraries: ['places'],
    }),
  ]
})
export class JobsModule { }
