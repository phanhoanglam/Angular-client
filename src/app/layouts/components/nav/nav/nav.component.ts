import { Component, OnInit } from '@angular/core';
import {CompanyRoutes, DashboardRouters, JobRoutes} from '@config/routes';
import {FreelancerRoutes} from '@config/routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  readonly jobRoutes = JobRoutes;
  readonly companyRoutes = CompanyRoutes;
  readonly freelancerRoutes = FreelancerRoutes;
  readonly dashboardRouters = DashboardRouters;

  constructor() { }

  ngOnInit(): void {
  }

}
