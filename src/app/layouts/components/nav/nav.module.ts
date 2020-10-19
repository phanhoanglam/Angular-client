import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
