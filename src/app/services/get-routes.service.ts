import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { default as cityRecycleData } from 'src/assets/city-recycle-data.json'
import { default as cityRefuseData } from 'src/assets/city-refuse-data.json'

@Injectable({
  providedIn: 'root'
})
export class GetRoutesService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'http://grand-rapids-proxy.herokuapp.com/proxy/resource/ykbs-97kp.json'

  getRoutes() {
    return cityRecycleData;
  }
}