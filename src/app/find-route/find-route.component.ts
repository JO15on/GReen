import { Component, OnInit } from '@angular/core';
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

  constructor(private _googleMaps: GoogleMapsService, private _share: ShareService) { }

  ngOnInit() {
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
      this.suggestions = res.predictions
    })
  }
}
