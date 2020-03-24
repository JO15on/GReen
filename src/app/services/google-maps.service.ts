import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {v4 as uuidv4 } from 'uuid'


@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  geoCodeURL: string = 'https://maps.googleapis.com/maps/api/geocode/json';
  autoCompleteURL: string = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json'
  key: string = "AIzaSyA3d1mZztQ3DJXWy3x4OaVKjV0ilaFMLSk"
  grCoords: any = {
    lat: 42.9634,
    lng: -85.6681
  }
  
  constructor(private http: HttpClient) { }

  addressToCoords(userAddress: string) {
    const params = new HttpParams({
      fromObject: {
        address: `${userAddress}, Grand Rapids, MI`,
        key: this.key
      }
    })
    return this.http.get(this.geoCodeURL, { params })
  }

  autoComplete(search: string) {
    const params = new HttpParams({
      fromObject: {
        input: search,
        key: this.key,
        sessiontoken: uuidv4(),
        location: "42.9634,-85.6681",
        radius: '20000'
      }
    })
    return this.http.get(this.autoCompleteURL, { params })
  }
}
