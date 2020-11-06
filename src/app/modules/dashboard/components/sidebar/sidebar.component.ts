import { AuthenticationService } from '@core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {DashboardRouters} from '@config/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  dashboardRoutes = DashboardRouters;
  isShowJob = false;
  isShowTask = false;
  isShowDashboardNav = false;

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  showDashboardNav(): void{
    this.isShowDashboardNav = !this.isShowDashboardNav;
  }

  showJob(): void {
    this.isShowJob = !this.isShowJob;
    this.isShowTask = false;
  }

  showTask(): void {
    this.isShowTask = !this.isShowTask;
    this.isShowJob = false;
  }


  logout(): void {
    this._authenticationService.logout();
  }
}
