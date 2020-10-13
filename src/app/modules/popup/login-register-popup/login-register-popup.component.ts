import { AuthenticationService } from '@core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-register-popup',
  templateUrl: './login-register-popup.component.html',
  styleUrls: ['./login-register-popup.component.scss']
})
export class LoginRegisterPopupComponent implements OnInit {

  isLogin = true;

  constructor(
    private _authenticationService: AuthenticationService,
    private _dialogRef: MatDialogRef<LoginRegisterPopupComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmitLogin() {
    this._authenticationService.test().subscribe(res=>{
      console.log(res);
    });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
