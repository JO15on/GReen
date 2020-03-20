import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GetCoordsService } from '../services/get-coords.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-find-route',
  templateUrl: './find-route.component.html',
  styleUrls: ['./find-route.component.css']
})
export class FindRouteComponent implements OnInit {

  userAddress: string;

  @Output()
  submitted = new EventEmitter<any>();

  constructor(private _getCoords: GetCoordsService, private _share: ShareService) { }

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
    this._getCoords.addressToCoords(this.userAddress).subscribe((res: any) => {
      console.log(res);
      const coords = res.results[0].geometry.location
      this._share.setLocation({
        coords,
        zoom: 18
      })
    })
  }

  submitLocation(){
    this.submitted.emit();
  }
}
