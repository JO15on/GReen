import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICoords } from '../interfaces';
import { GetCoordsService } from '../services/get-coords.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-find-route',
  templateUrl: './find-route.component.html',
  styleUrls: ['./find-route.component.css']
})
export class FindRouteComponent implements OnInit {

  userAddress: string;

  constructor(private getCoords: GetCoordsService, private share: ShareService) { }

  ngOnInit() {
  }

  geoLocateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      this.share.setLocation({
        coords: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 18
      })
    })
  }

  locateUser() {
    this.getCoords.addressToCoords(this.userAddress).subscribe((res: any) => {
      const coords = res.results[0].geometry.location
      this.share.setLocation({
        coords,
        zoom: 18
      })
    })
  }
}
