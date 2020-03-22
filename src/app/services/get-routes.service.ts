import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { default as cityRecycleData } from 'src/assets/city-recycle-data.json'
import { default as cityRefuseData } from 'src/assets/city-refuse-data.json'

@Injectable({
  providedIn: 'root'
})
export class GetRoutesService {

  // constructor(private http: HttpClient) { }

  // baseURL: string = 'http://grand-rapids-proxy.herokuapp.com/proxy/resource/ykbs-97kp.json'

  getRoutes(wantsRefuse: boolean) {
    if (wantsRefuse) {
      return this.makeUsableToGoogle(cityRefuseData, wantsRefuse);
    } else {
      return this.makeUsableToGoogle(cityRecycleData, wantsRefuse);
    }
  }

  makeUsableToGoogle(data: any, wantsRefuse: boolean) {
    let routes = [];
    let i = 0;
    data.map( route => {
      routes.push(this.makeRouteTemplate(route, wantsRefuse))
      route.the_geom.coordinates[0][0].map( coords => {
        routes[i].coords.push({
          lat: coords[1],
          lng: coords[0]
        })
      })
      i++;
    })
    console.log(routes);
    return routes   
  }

  makeRouteTemplate(currentRoute: any, wantsRefuse: boolean) {
    let template;
    if (wantsRefuse) {
      template = {
        coords: [],
        info: {
          route: currentRoute.route_num,
          day: currentRoute.route_day
        }
      }
    } else {
      template = {
        coords: [], 
        info: {
          route: currentRoute.route, 
          day: currentRoute.route_day
        }
      }

    }    
    return template;
  }
}