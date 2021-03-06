import { GoogleMapsAutocompleteDirective } from './shared/directives/googleMapsAutocompleteDirective/googleMapsAutocompleteDirective';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from './shared/share-module/shared-module.module';
import { LayoutModule } from '@layouts/layout.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@core/helpers/jwt.interceptor';
import { ErrorInterceptor } from '@core/helpers/error.interceptor';
import { LoginRegisterPopupComponent } from './modules/popup/login-register-popup/login-register-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JwPaginationComponent } from './shared/directives/pagination/JwPagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterPopupComponent,
    GoogleMapsAutocompleteDirective
  ],
  imports: [
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyC1T5A0ce0dJVYavhzTWH4w-yJ243KuTTI',
      libraries: ['places'],
    }),
  ],
  exports: [
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
