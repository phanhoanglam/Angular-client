import { FilterJob } from './../../../core/models/jobs';
import { JobTagService } from './../../../core/services/jobTag.service';
import { JobType } from './../../../core/models/job-type';
import { JobCategory } from './../../../core/models/job-category';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JobRoutes } from '@config/routes';
import { Job } from '@core/models/jobs';
import { JobService } from '@core/services/job.service';
import { JobCategoryService } from '@core/services/jobCategory.service';
import PlaceResult = google.maps.places.PlaceResult;
import { JobTypeService } from '@core/services/jobType.service';
import { JobTag } from '@core/models/job-tag';

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

  // filter
  salaryFrom: any;
  salaryTo: any;
  keyword: string;
  categories: JobCategory[] = [];
  selectCategory: JobCategory[] = [];
  jobTypes: JobType[] = [];
  selectType: JobType[] = [];
  jobTags: JobTag[] = [];
  selectTag: JobTag[] = [];
  latitude: number;
  longitude: number;

  address: string;

  dropdownSettings = {};

  public innerHeight: any;

  constructor(
    private _jobService: JobService,
    private _jobCategoryService: JobCategoryService,
    private _jobTypeService: JobTypeService,
    private _jobTagService: JobTagService,
  ) {}

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
    const params = new FilterJob();
    params.page = pageEvent;
    params.size = 12;
    if (this.salaryFrom !== undefined) {
      params.salaryFrom = this.salaryFrom;
    }
    if (this.salaryTo !== undefined) {
      params.salaryTo = this.salaryTo;
    }
    if (this.keyword !== undefined) {
      params.names = this.keyword;
    }
    if (this.address !== undefined && this.address.trim() !== '') {
      params.location = this.address;
    }
    params.categories = this.selectCategory;
    params.skills = this.selectTag;
    params.types = this.selectType;
    this._jobService.filter(params).subscribe((res: any) => {
      this.jobs = res.content;
      this.totalElement = res.totalElements;
    });
  }

  submitSearch(): void {
    this.loadData();
  }

  onItemSelect(event): void {
    const selectItem = this.selectCategory.map(x => x.id);
    console.log(selectItem);
    const parmas = { jobCategories: selectItem };
    this._jobTagService.filter(parmas).subscribe((res: any) => this.jobTags = res.content);
  }

  onItemDeSelect(event): void {
    const selectItem = this.selectCategory.map(x => x.id);
    console.log(selectItem);

    const parmas = { jobCategories: selectItem };
    this._jobTagService.filter(parmas).subscribe((res: any) => this.jobTags = res.content);
  }

  loadJobCategories(): void {
    this._jobCategoryService.filter(null).subscribe((res: JobCategory[]) => {
      this.categories = res;
    });
  }

  loadJobType(): void {
    this._jobTypeService.filter(null).subscribe((res: JobType[]) => {
      this.jobTypes = res;
    });
  }

  onAutocompleteSelected(result: PlaceResult): void {
    this.address = result.formatted_address;
  }
}
