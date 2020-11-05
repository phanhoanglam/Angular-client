import { JobProposalService } from './../../../core/services/jobProposal';
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
  zoom = 14;
  isApply = false;

  constructor(
    private readonly _jobService: JobService,
    private readonly _jobProposal: JobProposalService,
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
      this._jobProposal.searchProposal(this.job.id).subscribe((response: any)=> {
        console.log(response.data);
        
        if(response.data == null){
          this.isApply = true;
        }else{
          this.isApply = false;
        }
      });
    });
  }

  showPopupApplyNow(): void {
    const dialogRef = this.dialog.open(ApplyNowPopupComponent, {
      panelClass: 'custom-dialog-container',
      data: this.job?.id
    });
  }
}
