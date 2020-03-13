import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})
export class CategoryComponent implements OnInit {
  categories = [{
    automotive: [
      {
        itemName: "Automotive Batteries",
        description: "Automotive batteries may be recycled when you purchase a new car battery.  If you are not purchasing a car battery but have scrap batteries you would like to dispose of, please take it to one of the following businesses for recycling.",
        dropOffLocations: "TBD"
      },
      {
        itemName: "Autos & Automobile Products",
        description: "Donate your old vehicle, car, truck, trailer, boat, jet-ski, motorcycle, RV, etc. to a non-profit organization listed below.  If you plan to recycle or disassemble your vehicle yourself, visit these two websites for more information about safely disposing of the mercury in your vehicle.",
        dropOffLocations: "TBD"
      },
    ],
  }
  ];

values: any = undefined; 

  catSelected(cat : number){
    this.values = this.categories[cat];
    console.log(this.values);
  }

  constructor() { }

  ngOnInit() {
  }

}
