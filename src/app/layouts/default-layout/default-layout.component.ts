import { JobRoutes } from '@config/routes';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  isHide = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHide = (event.url !== '/' + JobRoutes.dashboardPath);
      }
    });
  }

}
