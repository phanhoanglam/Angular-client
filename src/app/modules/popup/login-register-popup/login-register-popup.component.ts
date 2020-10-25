import { AuthenticationService } from '@core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-register-popup',
  templateUrl: './login-register-popup.component.html',
  styleUrls: ['./login-register-popup.component.scss']
})
export class LoginRegisterPopupComponent implements OnInit {

  isLogin = true;
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  isEmployee = true;

  constructor(
    private _authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _dialogRef: MatDialogRef<LoginRegisterPopupComponent>
  ) {
    if (this._authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  isCheckLogin(isLogin): void {
    this.isLogin = isLogin;
    this.isEmployee = true;
  }

  isCheck(isBoolean): void {
    this.isEmployee = isBoolean;
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isEmployee) {
      this._authenticationService.loginEmployee(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.loading = false;
          });
    } else {
      this._authenticationService.loginEmployer(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.loading = false;
          });
    }
  }

  onRegister(): void {
    // console.log("Employee >>> ", this.isEmployee);
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
