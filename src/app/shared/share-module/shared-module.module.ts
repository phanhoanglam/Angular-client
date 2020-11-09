import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsAutocompleteDirective } from '../directives/googleMapsAutocompleteDirective/googleMapsAutocompleteDirective';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [GoogleMapsAutocompleteDirective],
  imports: [
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyC1T5A0ce0dJVYavhzTWH4w-yJ243KuTTI',
      libraries: ['places'],
    }),
  ],
  exports: [
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    GoogleMapsAutocompleteDirective,
    AgmCoreModule,
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
