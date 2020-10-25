import { NgModule } from '@angular/core';

import { DefaultLayoutComponent } from './default-layout.component';
import { HeaderModule } from '@layouts/components/header/header.module';
import { ContentModule } from '@layouts/components/content/content.module';
import { FooterModule } from '@layouts/components/footer/footer.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    HeaderModule,
    ContentModule,
    FooterModule,
    CommonModule,
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule { }
