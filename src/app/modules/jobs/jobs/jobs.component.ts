import { Component, OnInit } from '@angular/core';
import { JobRoutes } from '@config/routes';

@Component({
  selector: 'app-job',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public jobRoutes = JobRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
