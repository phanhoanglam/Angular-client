import { SidebarModule } from './components/sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/dahsboard-home/dashboard-home.component';
import { DashboardMessagesComponent } from './components/dashboard-messages/dashboard-messages.component';
import { DashboardSettingsComponent } from './components/dashboard-settings/dashboard-settings.component';
import {DashboardPostJobsComponent} from './components/dashboard-post-jobs/dashboard-post-jobs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardMessagesComponent,
    DashboardSettingsComponent,
    DashboardPostJobsComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    DashboardRoutingModule
  ],
  exports: []
})
export class DashboardModule { }
