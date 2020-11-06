import { Component, OnInit } from '@angular/core';
import { DashboardRouters, JobRoutes } from '@config/routes';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-post-jobs.component.html',
  styleUrls: ['./dashboard-post-jobs.component.scss']
})
export class DashboardPostJobsComponent implements OnInit {

  dashboardRoutes = DashboardRouters;
  jobRoutes = JobRoutes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
