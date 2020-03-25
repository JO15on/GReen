import { Injectable } from '@angular/core';
import { GetRoutesService } from './get-routes.service';
import { ShareService } from './share.service';
import { ILatLng, IRoute } from '../interfaces';



@Injectable({
  providedIn: 'root'
})
export class GetPickupDateService {

  constructor(private _getRoutes: GetRoutesService, private _share: ShareService) { }

  refuseRouteInfo: any
  refusePickupDate: Date

  recycleRouteInfo: any
  recyclePickupDate: Date

  userCoords: any
  

  getRoute(coords: ILatLng, isRefuse: boolean) {
    const mappedRoutes = this._getRoutes.getRoutes(isRefuse);
    const location     = new google.maps.LatLng(coords.lat, coords.lng);

    let userRoute = mappedRoutes.filter((route: IRoute) => {
        const poly = new google.maps.Polygon({ paths: route.coords });
        return google.maps.geometry.poly.containsLocation(location, poly);
    });
    
    const userPickUp = this.getNextPickUp(userRoute[0].info, isRefuse);
    const userRouteInfo = userRoute[1] ? userRoute[1].info : userRoute[0].info
    
    if (isRefuse) {
      this.refuseRouteInfo = userRouteInfo
      this.refusePickupDate = userPickUp;
    } else {
      this.recycleRouteInfo = userRouteInfo
      this.recyclePickupDate = userPickUp;
    }
    return userPickUp
  }

  getNextPickUp (routeInfo: any, isRefuseData: boolean) {
    const days        = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    const index       = days.findIndex(day => routeInfo.day.toLowerCase() === day)
    const pickUpDate  = new Date()

    if (isRefuseData) {
      pickUpDate.setDate(pickUpDate.getDate() + (index + 7 - pickUpDate.getDay()) % 7);
      console.log(pickUpDate);
      return pickUpDate
    } else {   
      if (routeInfo.route) {
        const routeNum        = routeInfo.route.substring(0, routeInfo.route.length - 1)
        const daysFromRoute1  = this.getDaysFromRoute1(routeNum)
        return this.getPickUpDate(pickUpDate, daysFromRoute1)
      } else {
        let routeNum = routeInfo.day.slice(routeInfo.day.length - 1)
        if (routeNum === "0") {
            routeNum = routeInfo.day.slice(routeInfo.day.length - 2)
        }
        const daysFromRoute1 = this.getDaysFromRoute1(routeNum)
        return this.getPickUpDate(pickUpDate, daysFromRoute1)
      }        
    } 
  }

  getPickUpDate (pickUpDate: Date, daysFromRoute1: number) {
    const oneDay          = 1000*60*60*24; 
    const startingDate    = new Date(2020,2,23);
    const diffDays        = (pickUpDate.getTime() - startingDate.getTime()) / oneDay;
    const daysFromZero    = (Math.floor(diffDays) % 14);
    const difference      = daysFromRoute1 - daysFromZero
    let daysUntilPickup   = difference >= 0 ? difference : difference + 14  
    if (daysUntilPickup === 0 && pickUpDate.getHours() > 15 ) {
        daysUntilPickup = 14
    }
    pickUpDate.setDate(pickUpDate.getDate() + daysUntilPickup)
    console.log(pickUpDate);
    return pickUpDate
  }

  getDaysFromRoute1 (routeNum: string) {
    switch (routeNum) {
        case '1':
            return 0
        case '2': 
            return 7
        case '3': 
            return 1
        case '4':
            return 8
        case '5': 
            return 2
        case '6':
            return 9
        case '7': 
            return 3
        case '8':
            return 10
        case '9': 
            return 4
        case '10':
            return 11
    }
  }
}


