import { AuthenticationService } from '@core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterPopupComponent } from 'app/modules/popup/login-register-popup/login-register-popup.component';
import { CurrentUser } from '@core/models/currentUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: CurrentUser;

  constructor(
    public dialog: MatDialog,
    private _authenticationService: AuthenticationService
  ) {
    
  }

  ngOnInit(): void {
    this._authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  showPopupLoginRegister(): void {
    const dialogRef = this.dialog.open(LoginRegisterPopupComponent, { panelClass: 'custom-dialog-container' });
  }

  logout(): void{
    this._authenticationService.logout();
  }
}
