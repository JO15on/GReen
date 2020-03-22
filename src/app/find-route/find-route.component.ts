import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-find-route',
  templateUrl: './find-route.component.html',
  styleUrls: ['./find-route.component.css']
})
export class FindRouteComponent implements OnInit {

  userAddress: string;
  suggestions: any[]

  @Output()
  submitted = new EventEmitter<any>();

  constructor(private _googleMaps: GoogleMapsService, private _share: ShareService) { }

  ngOnInit() {
  }

  geoLocateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      this._share.setLocation({
        coords: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 18
      })
    })
  }

  locateUser() {
    this._googleMaps.addressToCoords(this.userAddress).subscribe((res: any) => {
      const coords = res.results[0].geometry.location
      this._share.setLocation({
        coords,
        zoom: 18
      })
    })
  }

  getSuggestions(location) {
    this._googleMaps.autoComplete(location).subscribe((res: any) => {
      console.log(res.predictions);
      this.suggestions = res.predictions
    })
  }

  submitLocation(){
    this.submitted.emit();
  }
}
