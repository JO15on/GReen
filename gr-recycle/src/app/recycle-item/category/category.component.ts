import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})
export class CategoryComponent implements OnInit {

  categories = [{
    "automotive": [
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
  },
  {"holiday": [
    {
      itemName: "Christmas Trees",
      description: "Do you have an artificial Christmas tree or real Christmas tree to dispose of?  Once artificial Christmas trees have outlived their usefulness and cannot be donated for reuse, they must be thrown away.  They are non-recyclable and non-biodegradable.Once undecorated and free of any plastics (do not bag your tree), metals, and other non-organic materials, real Christmas trees may be recycled or “treecycled”",
      dropOffLocations: "TBD"
    },
    {
      itemName: "Christmas & Holiday Lights",
      description: "Christmas light strands cannot be recycled through curbside recycling programs. They become tanglers in the machines during the recycling process.Decorative frames or metal sculptures with lights strung through them may be disassembled and discarded/recycled in separate pieces. Please locate electronics recycling programs or use the following companies to safely and responsibly dispose of your light strands.",
      dropOffLocations: "TBD"
    },
  ],
}, 
  {"textiles": [
    {
      itemName: "Clothing & Textiles",
      description: "Recycling and disposal of clothing and textiles may include linens, bed sheets, pillows, towels, shirts, pants, table cloths, clothes, curtains, other fabric, etc.",
      dropOffLocations: "TBD"
    },
  ],
  }, 
  {"batteries": [
    {
      img: "/assets/batteries.png",
      itemName: "Batteries (rechargeable), Household",
      description: "Rechargeable batteries should always be recycled.  A rechargeable battery may contain heavy metals such as lead, cadmium, and nickel.  Examples of rechargeable batteries include nickel cadmium (Ni-Cd), lithium ion (Li-ion), nickel metal hydride (Ni-MH), small sealed lead acid (SSLA/PB, up to 11 pounds), and nickel zinc (Ni-Zn).",
      dropOffLocations: "TBD", 
    },
    {
      itemName: "Christmas & Holiday Lights",
      description: "Christmas light strands cannot be recycled through curbside recycling programs. They become tanglers in the machines during the recycling process.Decorative frames or metal sculptures with lights strung through them may be disassembled and discarded/recycled in separate pieces. Please locate electronics recycling programs or use the following companies to safely and responsibly dispose of your light strands.",
      dropOffLocations: "TBD"
    },
  ],
}, 
  ];

 show : boolean = false; 
 
 toggle() {
  this.show = !this.show;
}

values :any;
category : string;


  catSelected(catIndex : string){
   const index = this.categories.findIndex(category => {
    console.log(typeof Object.keys(category)[0]);
    console.log(typeof catIndex);
      return Object.keys(category)[0].trim() == catIndex;
      
    })
    console.log(index);
    this.values = this.categories[index];
    this.category = catIndex;
    console.log(this.values);
    return this.values;

  }

  constructor() { }

  ngOnInit() {
  }

}


// this.values = {data : this.categories[index], category: catIndex };
