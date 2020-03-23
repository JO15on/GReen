import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ICoords } from '../interfaces';
import { ShareService } from '../services/share.service';
import { GetRoutesService } from '../services/get-routes.service';
import { MapInfoWindow } from '@angular/google-maps';
import { RecycleCentersService } from '../services/recycle-centers.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  @Input() zoom: number;
  @Input() center: any;
  @Input() options: any;

  routes: any;
  routeNumber: string;
  routeDay: string;
  labelLocation: any;
  userRouteInfo: any;
  centerData: any;
  wantsRefuse: boolean;
  isLocationSubmitted: boolean = false;
  markers: any[] = []

  constructor(private _share: ShareService, private _getRoutes: GetRoutesService, private _recycleCenters: RecycleCentersService) { }

  ngOnInit() {
    this.centerData = this._recycleCenters.getCenterData()
    this.wantsRefuse = this._share.viewRefuse
    this.routes = this.getCityData()
    this._share.getLocation().subscribe((res: ICoords) => {
      this.center = res.coords;
      this.zoom = res.zoom;
      this.isLocationSubmitted = this._share.userSubmittedLocation;
      this.userRouteInfo = this.getUserPolygon();
    })
  }

  getCityData() {
    return this._getRoutes.getRoutes(this.wantsRefuse)
  }

  onPolygonClick(polygon: any, event: any, info: any) {
    this.labelLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    },
    this.userRouteInfo.route = info.route
    this.userRouteInfo.day = info.day
    this.infoWindow.open(polygon)
  }
  /* 
  getNextPickUp(routeInfo: any) {
    const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    const today = new Date()
    if (this.wantsRefuse) {
      const index = days.findIndex(day => routeInfo_day.toLowerCase() === day)
      today.setDate(today.getDate() + (0 + 7 - today.getDay()) % 7);


      return nextTrashPickup
    } else {
      return nextRecyclePickup
    }
  }
  */

  getUserPolygon() {
    let location = new google.maps.LatLng(this.center.lat, this.center.lng)
    let userPolygon = []
    let userRoute = this.routes.filter(route => {
      if (route.info.route) {
        let poly = new google.maps.Polygon({ paths: route.coords });
        if (google.maps.geometry.poly.containsLocation(location, poly)){
          // return this.getNextPickUp(route.info)
          console.log(this.wantsRefuse);
          return userPolygon.push(poly)
        } 
      }
    })
    this.labelLocation = location;
    if( this.isLocationSubmitted ) {
      this.userRouteInfo = userRoute[0].info
      this.infoWindow.open(userPolygon[0]);
    }
    return userRoute[0].info;
  }

  toggleRoutes() {
    this.getCityData()
    this._share.setRoutesView(this.wantsRefuse)
    this.ngOnInit()
  }

  getCategoryName(category: any) {
    return Object.keys(category)[0]
  }

  getMarkers(category) {
    this.markers = []
    let centers: any = Object.values(category)[0];
    centers.map(center => {
      this.markers.push({
        position: center.coords,
        label: {
          color: 'black',
          text: center.title
        },
        title: center.title
      })
    })
  }

  ngAfterViewInit() {
  }


  ngOnDestroy() {
  }

  /* 
  To Do: 
    1. Clickable markers
    2. Lighten opacity/stroke color.
    3. Get a different automotive location.
    4. Use geometry library to determine font color.
    5. Get route displaying on home page.
  */
}
