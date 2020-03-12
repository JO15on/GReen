import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY } from '../../../Secrets/api-key'

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
        key: API_KEY
      }
    })
    return this.http.get(this.baseURL, { params })
  }
}
