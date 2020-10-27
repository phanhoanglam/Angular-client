import { AuthenticationService } from '@core/services/authentication.service';
import { Component, ElementRef, NgZone, OnInit, ViewChild, AfterViewInit, QueryList } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';
import { ViewChildren } from '@angular/core';

@Component({
  selector: 'app-login-register-popup',
  templateUrl: './login-register-popup.component.html',
  styleUrls: ['./login-register-popup.component.scss']
})
export class LoginRegisterPopupComponent implements OnInit, AfterViewInit {

  isLogin = true;
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  isEmployee = true;

  latitude: number;
  longitude: number;
  zoom = 0;
  address: string;
  private geoCoder;
  @ViewChild('search') set search (searchElementRef: ElementRef|null) {
    if (!searchElementRef) { 
      return;
    }
  }

  constructor(
    private _authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
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

  ngAfterViewInit() {
    // load Places Autocomplete
    console.log(this.search);
    
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();
      let autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.address = place.formatted_address;
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 18;
          // this.getAddress(place.geometry.location.lat(), place.geometry.location.lng());
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 14;
        this.getAddress(this.latitude, this.longitude);
      }, () => {
        this.address = 'Choisir une adresse';
      });
    } else {
      alert('Geolocation is not supported by this browser, please use google chrome.');
    }
  }

  getAddress(latitude, longitude): void {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 18;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
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
