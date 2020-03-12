import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { ICoords } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private userLocation = new BehaviorSubject({
    // default map view
    coords: {
      lat: 42.9634,
      lng: -85.6681
    },
    zoom: 12
  })

  constructor() { }

  setLocation(data: ICoords) {
    this.userLocation.next(data)
  }
  getLocation(): Observable<ICoords> {
    return this.userLocation.asObservable()
  }

}
