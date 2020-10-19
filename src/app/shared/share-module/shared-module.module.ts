import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: []
})
export class SharedModule { }
