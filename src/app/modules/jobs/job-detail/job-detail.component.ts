import { JobCategory } from './../../../core/models/job-category';
import { JobType } from './../../../core/models/job-type';
import { Location } from './../../../shared/interfaces/location.interface';
import { ApplyNowPopupComponent } from './apply-now-popup/apply-now-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '@core/services/job.service';
import { Job, JobEmployer, AddressLocation } from '@core/models/jobs';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  job: Job;

  constructor(
    private readonly _jobService: JobService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.job = {} as Job;
    this.job.employer = {} as JobEmployer;
    this.job.addressLocation = {} as AddressLocation;
    this.job.jobType = {} as JobType;
    this.job.jobCategory = {} as JobCategory;
    const paramSlug = this.route.snapshot.params['postSlug'];
    this._jobService.get(paramSlug).subscribe((res: any) => {
      this.job = res;
      console.log(this.job.employer.avatar);
      console.log(this.job);
    });
  }

  showPopupApplyNow(): void {
    const dialogRef = this.dialog.open(ApplyNowPopupComponent, { panelClass: 'custom-dialog-container' },);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
