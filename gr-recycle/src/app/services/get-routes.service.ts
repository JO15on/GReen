import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { default as cityData } from 'src/assets/city-data.json'

@Injectable({
  providedIn: 'root'
})
export class GetRoutesService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'http://grand-rapids-proxy.herokuapp.com/proxy/resource/ykbs-97kp.json'

  getRoutes() {
    return cityData;
  }
}