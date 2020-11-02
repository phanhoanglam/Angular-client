import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressLocation, UserEmployee, UserEmployer } from './../../../core/models/User';
import { EmployeeService } from './../../../core/services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '@core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import PlaceResult = google.maps.places.PlaceResult;
import { EmployerService } from '@core/services/employer.service';
import { MapsAPILoader } from '@agm/core';

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
  fullname: string;

  latitude: number;
  longitude: number;

  registerForm: FormGroup;

  address: string;

  constructor(
    private _authenticationService: AuthenticationService,
    private _employeeService: EmployeeService,
    private _employerService: EmployerService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private _dialogRef: MatDialogRef<LoginRegisterPopupComponent>
  ) {
    if (this._authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    this.setCurrentLocation();
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
    this.address = result.formatted_address;
  }

  onLocationSelected(event): void {
    this.latitude = event.latitude;
    this.longitude = event.longitude;
  }

  // Get Current Location Coordinates
  private setCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getAddress(this.latitude, this.longitude);
      }, () => {
        this.address = 'Address';
      });
    } else {
      alert('Geolocation is not supported by this browser, please use google chrome.');
    }
  }

  getAddress(latitude, longitude): void {
    this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder;
      let latlng = { lat: latitude, lng: longitude };
      let that = this;
      geocoder.geocode({ 'location': latlng }, function (results) {
        if (results[0]) {
          that.address = results[0].formatted_address;
        } else {
          console.log('No results found');
        }
      });
    });
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
            this.close(true);
            // this._authenticationService.currentUser.next();
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
            this.close(true);
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.loading = false;
          });
    }
  }

  onRegister(): void {
    // if (this.registerForm.invalid) {
    //   return;
    // }
debugger;
    this.loading = true;

    const addressLocation = new AddressLocation();
    addressLocation.x = this.latitude;
    addressLocation.y = this.longitude;

    if (this.isEmployee) {
      const user = new UserEmployee();
      user.email = this.r.email.value;
      user.firstName = this.r.firstName.value;
      user.lastName = this.r.lastName.value;
      user.password = this.r.password.value;
      user.phone = this.r.phone.value;
      user.address = this.address;
      user.addressLocation = addressLocation;

      this._employeeService.create(user).subscribe(res => {
        console.log('Employee');
        this.isLogin = true;
      });
    } else {
      const user = new UserEmployer();
      user.email = this.r.email.value;
      user.name = this.fullname;
      user.password = this.r.password.value;
      user.phone = this.r.phone.value;
      user.address = this.address;
      user.addressLocation = addressLocation;

      this._employerService.create(user).subscribe(res => {
        console.log('Employee');
        this.isLogin = true;
      });
    }
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
