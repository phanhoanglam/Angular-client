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
