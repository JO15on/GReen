import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetRoutesService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://data.grandrapidsmi.gov/resource/ykbs-97kp.json?$select=the_geom'

  getRoutes() {
    const headers = new HttpHeaders({
        "X-App-Token": '52ya6j53n1mny7t841nkr3o1g'
    })
    
    return this.http.get(this.baseURL, { headers })
  }
}
