import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ICoords } from '../interfaces';
import { ShareService } from '../services/share.service';
import { GetRoutesService } from '../services/get-routes.service';
import { MapInfoWindow } from '@angular/google-maps'

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
  routeNumber: any;

  constructor(private _share: ShareService, private _getRoutes: GetRoutesService) { }

  ngOnInit() {
    this.routes = this.cityApiResp()
    this._share.getLocation().subscribe((res: ICoords) => {
      this.center = res.coords;
      this.zoom = res.zoom;
    })
  }

  cityApiResp() {
    const res = this._getRoutes.tempGetRoutes();
    const routes = [];
    let i = 0;
    res.map( route => {
      routes.push([])
      route.the_geom.coordinates[0][0].map( coords => {
        routes[i].push({
          lat: coords[1],
          lng: coords[0]
        })
      })
      i++;
    })
    console.log(routes);
    return routes
  }

  // onPolygonClick(polygon: any, info: any) {
  //   this.routeNumber = info
  //   console.log('Polygon Clicked!', polygon);
  // }

  // cityApiResp() {
    // this._getRoutes.getRoutes().subscribe( (res: any) => {
    //   console.log(res);
      // const routes = [];
      // let i = 0;
      // res.map( route => {
      //   routes.push([])
      //   route.the_geom.coordinates[0][0].map( coords => {
      //     routes[i].push({
      //       lat: coords[1],
      //       lng: coords[0]
      //     })
      //   })
      //   i++;
      // })
      // return routes
    // });
  // }



  ngAfterViewInit() {
  }


  ngOnDestroy() {
  }
}













const centers: any = {

  "Automotive": [
    {
      title: 'A1 Electric',
      position: '1813 Turner NW',
      label: 'Accepts scrap batteries.'
    },
    {
      title: 'SafeChem',
      position: '1500 Scribner Ave NW',
      label: 'Accepts garage/automotive products, home & garden products, workshop/paint supplies and many other miscellaneous products.'
    }
  ],
  "Construction": [
    {
      title: 'Full Circle Recycle: Recycling Aggregates',
      position: '3233 Broadmoor Ave SE',
      label: 'Accepts concrete, asphalt, ceramic and porcelain toilets/sinks, stone and gravel.'
    },
    {
      title: 'Pitsch Companies',
      position: '675 Richmond',
      label: 'Accepts and sells most deconstruction and building materials. Accepts yard waste and stumps for a fee.'
    }
  ],
  "Glass": [
    {
      title: 'Habitat Kent South ReStore',
      position: '5701 Division Ave S', // Wyoming
      label: 'Accepts new and gently used building materials and home improvement products for resale at discounted prices, including lumber, trim, stain/paint, windows, doors, working appliances, furniture, flooring, etc.  Accepts vehicles for donation.'
    },
    {
      title: 'Habitat Kent North ReStore',
      position: '5920 Alpine Ave NW', // Comstock Park
      label: 'Accepts new and gently used building materials and home improvement products for resale at discounted prices, including lumber, trim, stain/paint, windows, doors, working appliances, furniture, flooring, etc.  Accepts vehicles for donation.'
    },
  ],
  "Holiday": [
    {
      title: 'Kent County Recycling & Education Center',
      position: '977 Wealthy SW',
      label: 'Accepts residential recycling and consumer electronics. Cathode Ray Tube (CRT) monitors & TVs are not accepted at this location.'
    },
    {
      title: 'City of Grand Rapids Recycling & Refuse',
      position: '201 Market Ave NE',
      label: 'Operates curbside recycling, trash, and yard waste programs.  Operates a yard waste drop-off facility. Fees may apply.'
    }
  ],
  "Metal": [
    {
      title: 'Padnos',
      position: '601 Letellier St SW',
      label: 'Accepts scrap metals, wire, radiators, appliances, plastics, office and household electronics, computer components and accessories, satellite (DISH or Direct TV) dishes, and other e-waste.'
    },
    {
      title: 'Grand Rapids Iron & Metal',
      position: '1701 Clyde Park SW #15',
      label: 'Accepts automotive batteries and any type of scrap metal.'
    }    
  ],
  "Packaging": [
    {
      title: 'Arvron',
      position: '4720 Clay Street',
      label: 'Accepts non-food, clean, block-style Styrofoam only.'
    },
    {
      title: 'Pak Mail Grand Rapids NW',
      position: '3547 Alpine Ave. NW',
      label: 'Accepts clean, square foam blocks or sheets, packing peanuts, and bubble wrap.'
    }
  ],
  "Paper": [
    {
      title: 'Shred-it',
      position: '4717 Broadmoor SE',
      label: 'Accepts confidential papers, hard drives, and other media for secure shredding and destruction.'
    },
    {
      title: 'Rapid Green Group',
      position: '2972 Sangra Ave SW', // in Grandville
      label: 'Provides shredding, medical waste disposal, solid waste disposal and recycling options for businesses and other organizations.'
    }
  ],
  "Textiles": [
    {
      title: 'In The Image',
      position: '1823 S. Division Ave',
      label: 'Accepts gently used clothing/linens/baby items, school supplies, housewares, furniture, large appliances & small appliances, personal care items, kitchen items, TVs.'
    },
    {
      title: 'Goodwill',
      position: '956 Michigan St NE',
      label: 'Accepts working or broken computers/laptops/monitors, software, cameras, working flat-screen televisions (no CRT TV’s), furniture, household goods, clothing, books, etc.'
    }
  ],
  "Batteries": [
    {
      title: 'Hilti',
      position: '4503 Clay Avenue NW',
      label: 'Accepts rechargeable batteries.'
    },
    {
      title: 'Kent County Department of Public Works',
      position: '1500 Scribner Ave NW',
      label: 'Accepts rechargeable batteries.'
    }
  ],
  "Electronics": [
    {
      title: 'Best Buy',
      position: '3410 Alpine Ave NW',
      label: 'Accepts TVs and videos, computers and tablets, cell phones and radios, appliances, ink and toner, rechargeable batteries, audio, home, music and movies, video games and gadgets, cameras and camcorders, car audio and video and GPS.'
    },
    {
      title: 'Cascade Engineering',
      position: '5175 36th St SE',
      label: 'Accepts electronics, cell phones, ink jet cartridges, office supplies, books, phone books, magazines, eyeglasses, sports equipment, winter clothing for children, and business attire for women.'
    }
  ],
  "Hazardous": [
      {
        title: 'SafeChem',
        position: '1500 Scribner Ave NW',
        label: 'Accepts garage/automotive products, home & garden products, workshop/paint supplies and many other miscellaneous products.'
      }
  ],
  "Household": [
    {
      title: 'In The Image',
      position: '1823 S. Division Ave',
      label: 'Accepts gently used clothing/linens/baby items, school supplies, housewares, furniture, large appliances & small appliances, personal care items, kitchen items, TVs.'
    },
    {
      title: 'Goodwill',
      position: '956 Michigan St NE',
      label: 'Accepts working or broken computers/laptops/monitors, software, cameras, working flat-screen televisions (no CRT TV’s), furniture, household goods, clothing, books, etc.'
    }
  ],
  "Organic Waste": [
    {
      title: 'Organicycle',
      position: '5721 Division Ave South. Suite B', // Wyoming
      label: 'Accepts most organic waste for commercial composting.'
    },
    {
      title: 'Urban Roots',
      position: '1316 Madison Ave SE',
      label: 'For a small monthly fee, Urban Roots will collect household compost and organic waste from your curbside.'
    }
  ],
  "Paint": [
    {
      title: 'RepcoLite',
      position: '912 E. Fulton St.',
      label: 'Accepts latex paint for a fee.'
    },
    {
      title: 'Habitat Kent South ReStore',
      position: '5701 Division Ave S', // Wyoming
      label: 'Accepts new and gently used building materials and home improvement products for resale at discounted prices, including lumber, trim, stain/paint, windows, doors, working appliances, furniture, flooring, etc.  Accepts vehicles for donation.'
    },
  ],
  "Plastic": [
    {
      title: 'Meijer',
      position: '2425 Alpine Ave NW',
      label: 'Accepts plastic shopping bags. Most bag recycling drop-offs are located in the entryways or lobbies of the store.'
    },
    {
      title: 'Walmart',
      position: '5859 28th St SE',
      label: 'Accepts plastic shopping bags.'
    }
  ]
}
