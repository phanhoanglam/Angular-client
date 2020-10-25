import { AuthenticationService } from '@core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterPopupComponent } from 'app/modules/popup/login-register-popup/login-register-popup.component';
import { User } from '@core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(
    public dialog: MatDialog,
    private _authenticationService: AuthenticationService
  ) {
    this._authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  showPopupLoginRegister(): void {
    const dialogRef = this.dialog.open(LoginRegisterPopupComponent, { panelClass: 'custom-dialog-container' },);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
