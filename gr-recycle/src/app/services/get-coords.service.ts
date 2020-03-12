import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetCoordsService {

  baseURL: string = 'https://maps.googleapis.com/maps/api/geocode/json'

  constructor(private http: HttpClient) { }

  addressToCoords(userAddress: string) {
    const params = new HttpParams({
      fromObject: {
        address: `${userAddress}, Grand Rapids, MI`,
        key: "AIzaSyA3d1mZztQ3DJXWy3x4OaVKjV0ilaFMLSk"
      }
    })
    return this.http.get(this.baseURL, { params })
  }
}
