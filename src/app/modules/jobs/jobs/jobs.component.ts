import { JobType } from './../../../core/models/job-type';
import { JobCategory } from './../../../core/models/job-category';
import { Component, OnInit } from '@angular/core';
import { JobRoutes } from '@config/routes';
import { Job } from '@core/models/jobs';
import { JobService } from '@core/services/job.service';
import { JobCategoryService } from '@core/services/jobCategory.service';
import PlaceResult = google.maps.places.PlaceResult;
import { JobTypeService } from '@core/services/jobType.service';

@Component({
  selector: 'app-job',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {

  public jobRoutes = JobRoutes;

  jobs: Job[] = [];
  totalElement: number;
  pageIndex = 1;

  salaryFrom: any;
  salaryTo: any;

  latitude: number;
  longitude: number;
  address: string;
  categories: JobCategory[] = [];
  selectCategory: JobCategory[] = [];
  jobTypes: JobType[] = [];
  selectType: JobType[] = [];

  dropdownSettings = {};

  public innerHeight: any;

  constructor(
    private _jobService: JobService,
    private _jobCategoryService: JobCategoryService,
    private _jobTypeService: JobTypeService
  ) { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight - 82; // tổng height screen trừ 82px của header
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      itemsShowLimit: 1,
      enableCheckAll: false,
      allowSearchFilter: false
    };
    this.loadData();
    this.loadJobCategories();
    this.loadJobType();
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

  submitSearch() {
    let selectItem = this.selectCategory.map(x => x.id);
    console.log('cte >>> ', selectItem);
    console.log('type >>> ', this.selectType);
    
  }

  loadJobCategories(): void {
    this._jobCategoryService.filter(null).subscribe((res: JobCategory[]) => {
      this.categories = res;
    });
  }

  loadJobType(): void{
    this._jobTypeService.filter(null).subscribe((res: JobType[])=>{
      this.jobTypes = res;
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
