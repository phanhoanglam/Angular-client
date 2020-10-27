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
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1T5A0ce0dJVYavhzTWH4w-yJ243KuTTI',
      apiVersion: 'quarterly',
      libraries: ['places', 'geometry']
    })
  ],
})
export class JobMapsModule { }
