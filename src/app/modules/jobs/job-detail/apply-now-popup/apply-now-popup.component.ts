import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-now-popup',
  templateUrl: './apply-now-popup.component.html',
  styleUrls: ['./apply-now-popup.component.scss']
})
export class ApplyNowPopupComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<ApplyNowPopupComponent>
  ) { }

  ngOnInit(): void {
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
