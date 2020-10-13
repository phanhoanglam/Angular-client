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

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterPopupComponent
  ],
  imports: [
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
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
