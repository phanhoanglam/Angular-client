import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobRoutes } from '@config/routes';
import { Job } from '@core/models/jobs';
import { JobService } from '@core/services/job.service';
import { Options } from 'ng5-slider/options';

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

  constructor(
    private _jobService: JobService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  
  search(){
    console.log('salary >>> ', this.salary);
  }

  loadData(pageEvent?: number): void{
    if(pageEvent === undefined){
      pageEvent = this.pageIndex;
    }
    const parmas = { page: pageEvent, size: 12 };
    this._jobService.filter(parmas).subscribe((res: any) => {
      this.jobs = res.content;
      this.totalElement = res.totalElements;
    });
  }
}
