import { HttpParams } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { JobRoutes } from '@config/routes';
import { Job } from '@core/models/jobs';
import { JobService } from '@core/services/job.service';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-job',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public jobRoutes = JobRoutes;

  jobs: Job[] = [];
  totalElement: number;
  pageIndex = 1;

  salary: string;
  latitude: number;
  longitude: number;
  address: string;

  constructor(
    private _jobService: JobService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(pageEvent?: number): void {
    if (pageEvent === undefined) {
      pageEvent = this.pageIndex;
    }
    const parmas = { page: pageEvent, size: 12 };
    this._jobService.filter(parmas).subscribe((res: any) => {
      this.jobs = res.content;
      this.totalElement = res.totalElements;
    });
  }

  onAutocompleteSelected(result: PlaceResult): void {
    this.address = result.formatted_address;
  }

  onLocationSelected(event): void {
    this.latitude = event.latitude;
    this.longitude = event.longitude;
  }
}
