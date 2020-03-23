import { Injectable } from '@angular/core';
import { default as recycleCenters } from '../../assets/recycle-centers.json'


@Injectable({
  providedIn: 'root'
})
export class RecycleCentersService {

  constructor() { }
  
  getCenterData() {
    let centers = []
    const centerCategories = Object.keys(recycleCenters)
    centerCategories.map( category => {
      centers.push({
        [category]: recycleCenters[category] 
      })
    })
    return centers
  }
}
