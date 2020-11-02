import { ApplyNowPopupComponent } from './apply-now-popup/apply-now-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log('param >>> ', params);
    });

    console.log('param 2 >>>> ', this.route.snapshot.params['postSlug']);
  }

  showPopupApplyNow(): void {
    const dialogRef = this.dialog.open(ApplyNowPopupComponent, { panelClass: 'custom-dialog-container' },);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
