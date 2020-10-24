import { DashboardModule } from './../modules/dashboard/dashboard.module';
import { NgModule } from '@angular/core';

import { DefaultLayoutModule } from '@layouts/default-layout/default-layout.module';

@NgModule({
  imports: [
    DefaultLayoutModule
  ],
  exports: [
    DefaultLayoutModule
  ]
})
export class LayoutModule {

}
