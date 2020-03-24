import { Injectable } from '@angular/core';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class GeoLocateService {

  constructor(private _share: ShareService) { }


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
}
