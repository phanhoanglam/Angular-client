import { AuthenticationService } from '@core/services/authentication.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginRegisterPopupComponent } from 'app/modules/popup/login-register-popup/login-register-popup.component';
import { NavModule } from '../nav/nav.module';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    NavModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
