import { Observable } from 'rxjs';
import { Directive, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MapsAPILoader } from '@agm/core';
import { Location } from '../../interfaces/location.interface';
import PlaceResult = google.maps.places.PlaceResult;
import AutocompleteOptions = google.maps.places.AutocompleteOptions;

@Directive({
  selector: '[appGoogleMapsAutocomplete]',
  exportAs: 'googleMapsAutocomplete'
})
export class GoogleMapsAutocompleteDirective implements OnInit {

  @Input()
  address: PlaceResult | string;
  
  @Output()
  onAutocompleteSelected: EventEmitter<PlaceResult> = new EventEmitter<PlaceResult>();

  @Output()
  onLocationSelected: EventEmitter<Location> = new EventEmitter<Location>();

  constructor(@Inject(PLATFORM_ID) public platformId: string,
    public elemRef: ElementRef,
    public mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
      this.initGoogleMapsAutocomplete();
    // }

  }

  public initGoogleMapsAutocomplete(): void {
    this.mapsAPILoader
      .load()
      .then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.elemRef.nativeElement);

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {

            // get the place result
            const place: PlaceResult = autocomplete.getPlace();

            if (!place.place_id || place.geometry === undefined || place.geometry === null) {
              // place result is not valid
              return;
            } else {
              // show dialog to select a address from the input
              // emit failed event
            }
            this.address = place.formatted_address;

            this.onAutocompleteSelected.emit(place);
            this.onLocationSelected.emit(
              {
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
              });
          });
        });
      })
      .catch((err) => console.log(err));
  }
}
