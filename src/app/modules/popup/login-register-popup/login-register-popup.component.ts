import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserEmployee, UserEmployer } from './../../../core/models/User';
import { EmployeeService } from './../../../core/services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '@core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import PlaceResult = google.maps.places.PlaceResult;
import { EmployerService } from '@core/services/employer.service';

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

  registerForm: FormGroup;

  address: string;

  constructor(
    private _authenticationService: AuthenticationService,
    private _employeeService: EmployeeService,
    private _employerService: EmployerService,
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
  get r() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }


  onAutocompleteSelected(result: PlaceResult): void {
    console.log('log 2 > ', result);
  }

  onLocationSelected(event): void {
    console.log('log 1 > ', event);

  }


  // // Get Current Location Coordinates
  // private setCurrentLocation(): void {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 14;
  //       this.getAddress(this.latitude, this.longitude);
  //     }, () => {
  //       this.address = 'Choisir une adresse';
  //     });
  //   } else {
  //     alert('Geolocation is not supported by this browser, please use google chrome.');
  //   }
  // }

  // getAddress(latitude, longitude): void {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         this.zoom = 18;
  //         this.address = results[0].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }
  //   });
  // }

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
    console.log(this.r);

    this.loading = true;
    if (this.isEmployee) {
      const user = new UserEmployee();
      user.email = this.r.email.value;
      user.firstName = this.r.firstName.value;
      user.lastName = this.r.email.value;
      user.password = this.r.email.value;
      user.phone = this.r.email.value;

      this._employeeService.create(user).subscribe(res => {
        console.log('Employee');
      });
    } else {
      const user = new UserEmployer();
      user.email = this.r.email.value;
      user.name = this.r.fullname.value;
      user.password = this.r.password.value;
      user.phone = this.r.phone.value;

      this._employerService.create(user).subscribe(res => {
        console.log('Employee');
      });
    }
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
