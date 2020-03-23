import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ICoords } from '../interfaces';
import { ShareService } from '../services/share.service';
import { GetRoutesService } from '../services/get-routes.service';
import { MapInfoWindow } from '@angular/google-maps';
import { RecycleCentersService } from '../services/recycle-centers.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow

  @Input() zoom: number;
  @Input() center: any;
  @Input() options: any;

  routes: any
  routeNumber: string;
  routeDay: string;
  labelLocation: any;
  userRouteInfo: any;
  centerData: any;
  wantsRefuse: boolean;
  isLocationSubmitted: boolean = false;
  markers: any[] = []

  constructor(
    private _share: ShareService, 
    private _getRoutes: GetRoutesService, private _recycleCenters: RecycleCentersService) { }

  ngOnInit() {
    this.centerData = this._recycleCenters.getCenterData()
    this.wantsRefuse = this._share.viewRefuse
    this.routes = this.getCityData()
    this._share.getLocation().subscribe((res: ICoords) => {
      this.center = res.coords;
      this.zoom = res.zoom;
      this.isLocationSubmitted = this._share.userSubmittedLocation;
      this.userRouteInfo = this.getUserPolygon();
    })
  }

  getCityData() {
    return this._getRoutes.getRoutes(this.wantsRefuse);
  }

  onPolygonClick(polygon: any, event: any, info: any) {
    this.labelLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    },
    this.userRouteInfo.route = info.route
    this.userRouteInfo.day = info.day
    this.infoWindow.open(polygon)
  }

  getUserPolygon() {
    let location = new google.maps.LatLng(this.center.lat, this.center.lng)
    let userPolygon = []
    let userRoute = this.routes.filter(route => {
      if (route.info.route) {
        let poly = new google.maps.Polygon({ paths: route.coords });
        if (google.maps.geometry.poly.containsLocation(location, poly)){
          return userPolygon.push(poly)
        } 
      }
    })
    this.labelLocation = location;
    if( this.isLocationSubmitted ) {
      this.userRouteInfo = userRoute[0].info
      this.infoWindow.open(userPolygon[0]);
    }
    return userRoute[0].info;
  }

  toggleRoutes() {
    this.getCityData()
    this._share.setRoutesView(this.wantsRefuse)
    this.ngOnInit()
  }

  getCategoryName(category: any) {
    return Object.keys(category)[0]
  }

  getMarkers(category) {
    this.markers = []
    let centers: any = Object.values(category)[0];
    centers.map(center => {
      this.markers.push({
        position: center.coords,
        label: {
          color: 'black',
          text: center.title
        },
        title: center.title
      })
    })
  }

  ngAfterViewInit() {
  }


  ngOnDestroy() {
  }

  /* 
  To Do: 
    1. Change Opacity
    2. Get route displaying on home page.
  */
}



// const centers: any = {

//   "automotive": [
//     {
//       title: 'A1 Electric',
//       position: '1813 Turner NW',
//       coords: {
//         lat: 42.996270,
//         lng: -85.678400
//       },
//       label: 'Accepts scrap batteries.'
//     },
//     {
//       title: 'SafeChem',
//       position: '1500 Scribner Ave NW',
//       coords: {
//         lat: 42.991040,
//         lng: -85.675490
//       },
//       label: 'Accepts garage/automotive products, home & garden products, workshop/paint supplies and many other miscellaneous products.'
//     }
//   ],
//   "construction": [
//     {
//       title: 'Full Circle Recycle: Recycling Aggregates',
//       position: '3233 Broadmoor Ave SE',
//       coords: {
//         lat: 42.856150,
//         lng: -85.543660
//       },
//       label: 'Accepts concrete, asphalt, ceramic and porcelain toilets/sinks, stone and gravel.'
//     },
//     {
//       title: 'Pitsch Companies',
//       position: '675 Richmond',
//       coords: {
//         lat: 42.993360,
//         lng: -85.685520
//       },
//       label: 'Accepts and sells most deconstruction and building materials. Accepts yard waste and stumps for a fee.'
//     }
//   ],
//   "glass": [
//     {
//       title: 'Habitat Kent South ReStore',
//       position: '5701 Division Ave S', // Wyoming
//       coords: {
//         lat: 42.860520,
//         lng: -85.665600
//       },
//       label: 'Accepts new and gently used building materials and home improvement products for resale at discounted prices, including lumber, trim, stain/paint, windows, doors, working appliances, furniture, flooring, etc.  Accepts vehicles for donation.'
//     },
//     {
//       title: 'Habitat Kent North ReStore',
//       position: '5920 Alpine Ave NW', 
//       coords: {
//         lat: 43.0711992,
//         lng: -85.6890308
//       },
//       label: 'Accepts new and gently used building materials and home improvement products for resale at discounted prices, including lumber, trim, stain/paint, windows, doors, working appliances, furniture, flooring, etc.  Accepts vehicles for donation.'
//     },
//   ],
//   "holiday": [
//     {
//       title: 'Kent County Recycling & Education Center',
//       position: '977 Wealthy SW',
//       coords: {
//         lat: 42.9571,
//         lng: -85.6920405
//       },
//       label: 'Accepts residential recycling and consumer electronics. Cathode Ray Tube (CRT) monitors & TVs are not accepted at this location.'
//     },
//     {
//       title: 'City of Grand Rapids Recycling & Refuse',
//       position: '201 Market Ave NE',
//       coords: {
//         lat: 42.959648,
//         lng: -85.6766458
//       },
//       label: 'Operates curbside recycling, trash, and yard waste programs.  Operates a yard waste drop-off facility. Fees may apply.'
//     }
//   ],
//   "metal": [
//     {
//       title: 'Padnos',
//       position: '601 Letellier St SW',
//       coords: {
//         lat: 42.9579426,
//         lng: -85.6838907
//       },
//       label: 'Accepts scrap metals, wire, radiators, appliances, plastics, office and household electronics, computer components and accessories, satellite (DISH or Direct TV) dishes, and other e-waste.'
//     },
//     {
//       title: 'Grand Rapids Iron & Metal',
//       position: '1701 Clyde Park SW #15',
//       coords: {
//         lat: 42.933271688202474,
//         lng: -85.68673446021315
//       },
//       label: 'Accepts automotive batteries and any type of scrap metal.'
//     }    
//   ],
//   "packaging": [
//     {
//       title: 'Arvron',
//       position: '4720 Clay Street',
//       coords: {
//         lat: 42.8783798,
//         lng: -85.6763388
//       },
//       label: 'Accepts non-food, clean, block-style Styrofoam only.'
//     },
//     {
//       title: 'Pak Mail Grand Rapids NW',
//       position: '3547 Alpine Ave. NW',
//       coords: {
//         lat: 43.0279047,
//         lng: -85.6907542
//       },
//       label: 'Accepts clean, square foam blocks or sheets, packing peanuts, and bubble wrap.'
//     }
//   ],
//   "paper": [
//     {
//       title: 'Shred-it',
//       position: '4717 Broadmoor SE',
//       coords: {
//         lat: 42.8779647,
//         lng: -85.5620686
//       },
//       label: 'Accepts confidential papers, hard drives, and other media for secure shredding and destruction.'
//     },
//     {
//       title: 'Rapid Green Group',
//       position: '2972 Sangra Ave SW', // in Grandville
//       coords: {
//         lat: 42.9106934,
//         lng: -85.7402128
//       },
//       label: 'Provides shredding, medical waste disposal, solid waste disposal and recycling options for businesses and other organizations.'
//     }
//   ],
//   "textiles": [
//     {
//       title: 'In The Image',
//       position: '1823 S. Division Ave',
//       coords: {
//         lat: 42.9302144,
//         lng: -85.6673629
//       },
//       label: 'Accepts gently used clothing/linens/baby items, school supplies, housewares, furniture, large appliances & small appliances, personal care items, kitchen items, TVs.'
//     },
//     {
//       title: 'Goodwill',
//       position: '956 Michigan St NE',
//       coords: {
//         lat: 42.9697551,
//         lng: -85.6453701
//       },
//       label: 'Accepts working or broken computers/laptops/monitors, software, cameras, working flat-screen televisions (no CRT TV’s), furniture, household goods, clothing, books, etc.'
//     }
//   ],
//   "batteries": [
//     {
//       title: 'Hilti',
//       position: '4503 Clay Avenue NW',
//       coords: {
//         lat: 42.8823693,
//         lng: -85.6800856
//       },
//       label: 'Accepts rechargeable batteries.'
//     },
//     {
//       title: 'Kent County Department of Public Works',
//       position: '1500 Scribner Ave NW',
//       coords: {
//         lat: 42.8823693,
//         lng: -85.6800856
//       },
//       label: 'Accepts rechargeable batteries.'
//     }
//   ],
//   "electronic_appliances": [
//     {
//       title: 'Best Buy',
//       position: '3410 Alpine Ave NW',
//       coords: {
//         lat: 43.02526,
//         lng: -85.68916
//       },
//       label: 'Accepts TVs and videos, computers and tablets, cell phones and radios, appliances, ink and toner, rechargeable batteries, audio, home, music and movies, video games and gadgets, cameras and camcorders, car audio and video and GPS.'
//     },
//     {
//       title: 'Cascade Engineering',
//       position: '5175 36th St SE',
//       coords: {
//         lat: 42.89826,
//         lng: -85.53946	
//       },
//       label: 'Accepts electronics, cell phones, ink jet cartridges, office supplies, books, phone books, magazines, eyeglasses, sports equipment, winter clothing for children, and business attire for women.'
//     }
//   ],
//   "hazardous": [
//       {
//         title: 'SafeChem',
//         position: '1500 Scribner Ave NW',
//         coords: {
//           lat: 42.991040,
//           lng: -85.675490
//         },
//         label: 'Accepts garage/automotive products, home & garden products, workshop/paint supplies and many other miscellaneous products.'
//       }
//   ],
//   "household": [
//     {
//       title: 'In The Image',
//       position: '1823 S. Division Ave',
//       coords: {
//         lat: 42.9302144,
//         lng: -85.6673629
//       },
//       label: 'Accepts gently used clothing/linens/baby items, school supplies, housewares, furniture, large appliances & small appliances, personal care items, kitchen items, TVs.'
//     },
//     {
//       title: 'Goodwill',
//       position: '956 Michigan St NE',
//       coords: {
//         lat: 42.9697551,
//         lng: -85.6453701

//       },
//       label: 'Accepts working or broken computers/laptops/monitors, software, cameras, working flat-screen televisions (no CRT TV’s), furniture, household goods, clothing, books, etc.'
//     }
//   ],
//   "organic_waste": [
//     {
//       title: 'Organicycle',
//       position: '5721 Division Ave South. Suite B', // Wyoming
//       coords: {
//         lat: 42.85994,
//         lng: -85.66391
//       },
//       label: 'Accepts most organic waste for commercial composting.'
//     },
//     {
//       title: 'Urban Roots',
//       position: '1316 Madison Ave SE',
//       coords: {
//         lat: 42.9388,
//         lng: -85.65883
//       },
//       label: 'For a small monthly fee, Urban Roots will collect household compost and organic waste from your curbside.'
//     }
//   ],
//   "paint": [
//     {
//       title: 'RepcoLite',
//       position: '912 E. Fulton St.',
//       coords: {
//         lat: 42.96282,
//         lng: -85.64672
//       },
//       label: 'Accepts latex paint for a fee.'
//     },
//     {
//       title: 'Habitat Kent South ReStore',
//       position: '5701 Division Ave S',
//       coords: {
//         lat: 42.860520,
//         lng: -85.665600
//       },
//       label: 'Accepts new and gently used building materials and home improvement products for resale at discounted prices, including lumber, trim, stain/paint, windows, doors, working appliances, furniture, flooring, etc.  Accepts vehicles for donation.'
//     },
//   ],
//   "plastic": [
//     {
//       title: 'Meijer',
//       position: '2425 Alpine Ave NW',
//       coords: {
//         lat: 43.00835,
//         lng: -85.68867
//       },
//       label: 'Accepts plastic shopping bags. Most bag recycling drop-offs are located in the entryways or lobbies of the store.'
//     },
//     {
//       title: 'Walmart',
//       position: '5859 28th St SE',
//       coords: {
//         lat: 42.9132,
//         lng: -85.5244
//       },
//       label: 'Accepts plastic shopping bags.'
//     }
//   ]
// }
