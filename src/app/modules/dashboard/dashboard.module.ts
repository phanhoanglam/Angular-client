import { SidebarModule } from './components/sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardHomeComponent} from './components/dahsboard-home/dashboard-home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent
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
