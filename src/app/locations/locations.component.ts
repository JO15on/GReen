import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ICoords, ILatLng } from '../interfaces';
import { ShareService } from '../services/share.service';
import { GetRoutesService } from '../services/get-routes.service';
import { MapInfoWindow } from '@angular/google-maps';
import { RecycleCentersService } from '../services/recycle-centers.service';
import { CategoriesService } from '../services/categories.service';
import { GetPickupDateService } from '../services/get-pickup-date.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  
  center: ILatLng;
  zoom: number;
  routes: any;
  labelLocation: any;
  userRouteInfo: any;
  centerData: any;
  wantsRefuse: boolean;
  userPolygon: any;
  subscription: any;
  userNextPickup: Date;
  isLocationSubmitted: boolean = false;
  markers: any[] = [];
  
   
  constructor(
    private _share: ShareService, 
    private _getRoutes: GetRoutesService, 
    private _recycleCenters: RecycleCentersService,
    private _category: CategoriesService,
    private _pickupDate: GetPickupDateService) { }

  ngOnInit() {
    this.wantsRefuse = this._share.viewRefuse
    this.centerData  = this._recycleCenters.getCenterData()

    if (this._share.userSubmittedLocation) {
      this.routes = this.wantsRefuse ? this._getRoutes.refuseRoutes : this._getRoutes.recycleRoutes
    } else {
      this.routes = this._getRoutes.getRoutes(this.wantsRefuse)
    }

    this.subscription = this._share.getLocation().subscribe((res: ICoords) => {
      this.center              = res.coords;
      this.zoom                = res.zoom;
      this.isLocationSubmitted = this._share.userSubmittedLocation;
      this.userRouteInfo       = this.getUserPolygon();
      this.userNextPickup      = this._pickupDate.getRoute(this.center, this.wantsRefuse)
    })
  }

  /***  Methods for Google Map + Polygons ****/

  onPolygonClick(polygon: any, event: any, info: any) {
    this.labelLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    },
    this.userRouteInfo.route = info.route
    this.userRouteInfo.day = info.day
    this.infoWindow.open(polygon)
  }

  getUserPolygon() {
    let location    = new google.maps.LatLng(this.center.lat, this.center.lng)
    let userPolygon = []
    let userRoute   = this.routes.filter(route => {
      if (route.info.route) {
        let poly = new google.maps.Polygon({ paths: route.coords });
        if (google.maps.geometry.poly.containsLocation(location, poly)){
          return userPolygon.push(poly)
        } 
      }
    })
    this.labelLocation = location;
    if( this.isLocationSubmitted && this.infoWindow) {
      this.userNextPickup = this.wantsRefuse ? this._pickupDate.refusePickupDate : this._pickupDate.recyclePickupDate
      this.userRouteInfo = userRoute[0].info
      this.userPolygon = userPolygon[0]
      this.infoWindow.open(userPolygon[0]);
    }
    return userRoute[0].info;
  }

  toggleRoutes() {
    this._getRoutes.getRoutes(this.wantsRefuse)
    this._share.setRoutesView(this.wantsRefuse)
    this.ngOnInit()
  }

  ngAfterViewInit() {
    if (this.isLocationSubmitted) {
      this.infoWindow.open(this.userPolygon)
    }
  }

  /**** Methods for Categories (Should be a separate component) ****/

  getMarkers(category) {
    this.markers = []
    let centers: any = Object.values(category)[0];
    this.zoom = 11
    let i = 1
    centers.map(center => {
      this.markers.push({
        position: center.coords,
        label: {
          color: '#FFF',
          text: `${i++}`
        },
        address: center.position,
        desc: center.label,
        title: center.title
      })
    })
  }

  getCategoryName(category: any) {
    return Object.keys(category)[0]
  }

  getPath(category: string) {
    return this._category.getPath(category)
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  /* 
  To Do: 
    1. Get Next Pick up date displaying instead of route day
    2. Clickable markers
    3. Get a different automotive location.
    4. Get route displaying on home page.
  */
}
