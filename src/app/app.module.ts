import { AgmCoreModule } from '@agm/core';
import { SharedModule } from './shared/share-module/shared-module.module';
import { LayoutModule } from '@layouts/layout.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@core/helpers/jwt.interceptor';
import { ErrorInterceptor } from '@core/helpers/error.interceptor';
import { LoginRegisterPopupComponent } from './modules/popup/login-register-popup/login-register-popup.component';
import { JobMapsComponent } from './modules/job-maps/job-maps/job-maps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterPopupComponent
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
      // apiKey: 'AIzaSyBYiHfMlwJdYaxFTkZQAk57bZaLPPW35TY',
      apiKey: 'AIzaSyC1T5A0ce0dJVYavhzTWH4w-yJ243KuTTI',
      apiVersion: 'quarterly',
      libraries: ['places', 'geometry']
    })
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
