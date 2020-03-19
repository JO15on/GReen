import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { default as cityData } from 'src/assets/city-data.json'

@Injectable({
  providedIn: 'root'
})
export class GetRoutesService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'http://data.grandrapidsmi.gov/resource/ykbs-97kp.json'
  apiKey: string = 'API_KEY'
  apiSecret: string = 'API_SECRET'
  auth = btoa(`${this.apiKey}:${this.apiSecret}`)


  getRoutes() {
    // let headers = new HttpHeaders({
    //     'Authorization': `Basic ${this.auth}`,
    //     'Content-Type': 'application/json'
    // })
    // return this.http.get(this.baseURL, { headers })
  }
  

  tempGetRoutes() {
    return cityData;
  }
}