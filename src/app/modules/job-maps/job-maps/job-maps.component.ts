import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var showFilters: any;

@Component({
  selector: 'app-job-maps',
  templateUrl: './job-maps.component.html',
  styleUrls: ['./job-maps.component.scss']
})
export class JobMapsComponent implements OnInit, AfterViewInit {
  
  isFilter = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (showFilters) {
      showFilters();
    }
  }

}
