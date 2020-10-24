import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var showFilters: any;

@Component({
  selector: 'app-job-maps',
  templateUrl: './job-maps.component.html',
  styleUrls: ['./job-maps.component.scss']
})
export class JobMapsComponent implements OnInit {

  isFilter = true;
  lat: number;
  lng: number;
  zoom: number;

  constructor() { }

  ngOnInit(): void {
    this.lat = 16.0324919;
    this.lng = 108.21804;
    this.zoom = 16;
  }

  // ngAfterViewInit(): void {
  //   // if (showFilters) {
  //   //   showFilters();
  //   // }
  // }
}

