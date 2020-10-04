import { NgModule } from '@angular/core';

import { DefaultLayoutComponent } from './default-layout.component';
import { NavModule } from '@layouts/components/nav/nav.module';
import { HeaderModule } from '@layouts/components/header/header.module';
import { ContentModule } from '@layouts/components/content/content.module';
import { FooterModule } from '@layouts/components/footer/footer.module';

@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    NavModule,
    HeaderModule,
    ContentModule,
    FooterModule,
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule { }
