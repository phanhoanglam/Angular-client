import { JobMapsComponent } from './job-maps/job-maps.component';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobMapsRoutingModule } from './job-maps-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    JobMapsComponent
  ],
  imports: [
    JobMapsRoutingModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYiHfMlwJdYaxFTkZQAk57bZaLPPW35TY'
    })
  ],
})
export class JobMapsModule { }
