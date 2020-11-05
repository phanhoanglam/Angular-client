import { Attachments, CvJobProposal, JobProposal } from './../../../../core/models/job-proposal';
import { JobProposalService } from './../../../../core/services/jobProposal';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-now-popup',
  templateUrl: './apply-now-popup.component.html',
  styleUrls: ['./apply-now-popup.component.scss']
})
export class ApplyNowPopupComponent implements OnInit {

  fileToUpload: File = null;
  message: string;

  constructor(
    private _jobProposalService: JobProposalService,
    private _dialogRef: MatDialogRef<ApplyNowPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _id: any,
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  onSubmit(): void{
    this._jobProposalService.saveFile(this.fileToUpload).subscribe((res: any)=>{
      const jobProposal = new JobProposal();
      jobProposal.jobId = this._id;
      console.log(res.data.name);
      jobProposal.attachments = new Attachments();
      jobProposal.attachments.cv = new CvJobProposal();
      jobProposal.attachments.cv.name = res.data.name;
      jobProposal.attachments.cv.url = res.data.url;
      jobProposal.message = this.message;
      this._jobProposalService.saveJob(jobProposal).subscribe((jobRes: any) => {
        console.log(jobRes);
      });
    });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
