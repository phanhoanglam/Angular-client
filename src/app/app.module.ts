import { SharedModule } from './shared/share-module/shared-module.module';
import { LayoutModule } from '@layouts/layout.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './modules/account/account.component';
import { AdminComponent } from './modules/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
