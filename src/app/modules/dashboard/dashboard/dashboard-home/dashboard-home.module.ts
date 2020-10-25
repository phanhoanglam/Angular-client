import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHomeRoutingModule } from './dashboard-home-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';


@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule
  ]
})
export class DashboardHomeModule { }
