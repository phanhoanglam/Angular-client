import { DashboardSettingsComponent } from './components/dashboard-settings/dashboard-settings.component';
import { DashboardMessagesComponent } from './components/dashboard-messages/dashboard-messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/dahsboard-home/dashboard-home.component';
import { DashboardRouters } from '@config/routes';
import {DashboardPostJobsComponent} from './components/dashboard-post-jobs/dashboard-post-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: DashboardRouters.message, component: DashboardMessagesComponent },
      { path: DashboardRouters.setting, component: DashboardSettingsComponent },
      { path: DashboardRouters.postJob, component: DashboardPostJobsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
