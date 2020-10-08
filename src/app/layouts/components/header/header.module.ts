import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavModule } from '../nav/nav.module';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    NavModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
