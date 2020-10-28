import { Directive, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID, ElementRef, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MapsAPILoader } from '@agm/core';
import { Location } from '../../interfaces/location.interface';
import PlaceResult = google.maps.places.PlaceResult;
import AutocompleteOptions = google.maps.places.AutocompleteOptions;

@Directive({
    selector: '[googleMapsAutocomplete]',
    exportAs: 'googleMapsAutocomplete'
})
export class GoogleMapsAutocompleteDirective implements OnInit {

    @Input()
    address: PlaceResult | string;

    @Input()
    country: string | string[];

    @Input()
    autoCompleteOptions: AutocompleteOptions = {};

    @Output()
    onChange: EventEmitter<PlaceResult | string | null> = new EventEmitter<PlaceResult | string | null>();

    @Output()
    onAutocompleteSelected: EventEmitter<PlaceResult> = new EventEmitter<PlaceResult>();

    @Output()
    onLocationSelected: EventEmitter<Location> = new EventEmitter<Location>();

    private onNewPlaceResult: EventEmitter<any> = new EventEmitter();

    constructor(@Inject(PLATFORM_ID) public platformId: string,
        public elemRef: ElementRef,
        public mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone) { }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            const options: AutocompleteOptions = {};

            this.autoCompleteOptions = Object.assign(this.autoCompleteOptions, options);
            this.initGoogleMapsAutocomplete();
        }

    }

    public initGoogleMapsAutocomplete(): void {
        this.mapsAPILoader
            .load()
            .then(() => {
                const autocomplete = new google.maps.places.Autocomplete(this.elemRef.nativeElement, this.autoCompleteOptions);

                // google.maps.event.addListener(autocomplete, 'place_changed', () => {
                //     console.log('aaaaaaaaaa');
                // });

                autocomplete.addListener('place_changed', () => {
                  this.ngZone.run(() => {
                      console.log('aaaaaaaaaaaaa');
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
