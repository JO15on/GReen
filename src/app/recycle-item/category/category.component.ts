import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})
export class CategoryComponent implements OnInit {
  show: boolean = false;
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
  { 
    "holiday": [
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
      itemName: "Automotive Batteries",
      description: "Automotive batteries may be recycled when you purchase a new car battery.  If you are not purchasing a car battery but have scrap batteries you would like to dispose of, please take it to one of the following businesses for recycling.",
      dropOffLocations: "TBD"
    },
  ],
},
{"electronics_appliances": [
  {
    itemName: "Computers, TVs & Electronics",
    description: "Most electronics contain valuable materials that can be recycled (at special drop-offs–NOT your recycling bin) such as copper, silver, and gold.  Some electronics even contain materials that are hazardous like lead and mercury and need to be kept out of landfills.",
    dropOffLocations: "TBD", 
  },
  {
    itemName: "Light Bulbs",
    description: "Incandescent, halogen and most other light bulbs contain no mercury and therefore may be placed in your trash. Fluorescent light bulbs contain a small amount of mercury, a toxic metal.  Fluorescent bulbs such as CFL bulbs, tube lights, and U-shaped lights must be disposed of at a Kent County SafeChem location.",
    dropOffLocations: "TBD", 
  },
  {
    itemName: "Appliances",
    description:
    "Appliances include refrigerators, freezers, ovens, stove-tops, laundry machines, washing machines, dehumidifiers, air conditioner units, dishwashers, water heaters, water coolers, etc. If you are able to donate or sell a working appliance for someone else to reuse, please do so through Craig’s List, Facebook Marketplace, other online platforms, or through businesses or charities that accept appliances for donations. However if the appliance no longer functions, the best option is to recycle it where possible. For non-working appliances, always remove the doors before disposal to protect against entrapment. Appliances must have all food and other debris removed. Many appliances may be recycled for scrap metal however keep in mind that some appliances contain refrigerant gas (such as Freon/CFCs) that is hazardous and must be removed by a trained technician. Examples of common appliances that contain refrigerant gas are refrigerators, freezers, water coolers, air conditioner units, and some dehumidifiers. For disposal and recycling, check with your waste hauler, check the Yellow Pages under “scrap metal,” or donate working appliances." ,
    dropOffLocations: "TBD"
  },
],
}, 
{"medications": [
  {
    itemName: "Medications",
    description: "Twenty to sixty percent of prescription medications go unused and are eventually disposed. Nearly all unused pharmaceuticals enter either our solid waste system or our sewage system. Neither disposal method is environmentally sound. Pharmaceuticals flushed down the toilet pass through our sewage treatment plants, which are generally not designed to screen for these chemicals. Pharmaceuticals discarded in landfills can seep into the surrounding water table. Several studies, including a 2002 analysis by the US Geological Survey of 139 streams across 30 states found that 80 percent of waterways tested had measurable concentrations of prescription and nonprescription drugs, steroids, and reproductive hormones. The SafeChem program is a joint effort between local pharmacies, law enforcement, wastewater treatment facilities and Kent County to provide residents with safe, convenient access to proper medicine disposal. SafeChem participants include many local pharmacies and law enforcement agencies that will accept your unwanted medications. Disposing of your medicines at one of these locations will ensure that your medicines will not be stolen from the garbage, will not enter our environment and eliminates the potential for abuse at home.",
    dropOffLocations: "TBD", 
  },
  {
    itemName: "Sharps",
    description: "Kent County residents now have an option for safe disposal of used needles, lancets, and epi-pens. The Kent County Department of Public Works (KCDPW) and the Kent County Health Department (KCHD) are teaming up to ensure safe, confidential and environmentally sound disposal of certain medical materials through the SafeSharps Program. Since 2016, KCDPW has administered the SafeSharps program allowing Kent County residents to request a free container from any KCHD facility. After completing a brief registration form, KCHD will issue a sterile approved container that users may take home. Once full, the container can be returned to any KCHD facility where it will be exchanged for a new one. KCHD will not accept sharps in any container that was not issued through this program.",
    dropOffLocations: "TBD", 
  },
],
},
{"paint": [
  {
    itemName: "Latex Paint",
    description: "To determine if your paint is latex, sometimes known as enamel paint, look at the label and find the ‘Cleanup Instructions’. For latex paint, you will be instructed to clean your brushes with ‘detergent and water’ or ‘soap and water’. See the sections below on donating/reusing or disposing of Latex Paint for further instructions. If you are instructed to use a solvent, like mineral spirits or paint thinner, to clean your brushes or if you find the words ‘alkyd’ or ‘combustible’ are on the label, your paints are not latex and will need to be disposed of through the Kent County Department of Public Work’s SafeChem Program. Leftover latex paint can be saved for future projects, used by family or friends, or needed by other residents of West Michigan. Instead of tossing usable latex paint, look at the business directory below for places to donate latex paint.",
    dropOffLocations: "TBD", 
  },
  {
    itemName: "Lead Paint Chips",
    description:"Lead paint chips will not leach out of a landfill so landfilling of home-owner-generated lead paint chips is appropriate. If the paint chips are from your home, if you removed them yourself and if you live OUTSIDE the city limits of Grand Rapids, East Grand Rapids, Walker, Wyoming, Grandville or Kentwood, double bag the paint chips and put them in your trash so they can be disposed of in a landfill. If you live INSIDE the city limits of Grand Rapids, East Grand Rapids, Walker, Wyoming, Grandville or Kentwood, double bag the paint chips and take them to a landfill for disposal. Your trash goes to the Kent County Waste to Energy Facility for incineration and lead paint chips should not be incinerated.",
    dropOffLocations: "TBD"
  },
],
},
{"plastics": [
  {
    img: "/assets/plastics_example.png",
    itemName: "Plastics",
    description: "Clean, empty hard plastics that are stamped with a recycling symbol (#1-7) can be placed in your bin. These items include plastic bottles, cups, containers, tubs, and jugs. Before you place any of these items in your bin, please be sure to rinse/clean the plastic item (labels can be left on) and put the cap back on.",
    dropOffLocations: "TBD", 
  },
  {
    itemName: "Foam & Packaging Materials",
    description:"Foam products (Styrofoam) are not recyclable through the Kent County residential recycling program. While foam is a type of plastic, foam proves to be a difficult material to process in a sorting facility due to its tendency to crumble and cling to other material. Please use the listed drop-offs below for foam cups, plates, “to-go” containers, egg cartons, ice chests, rinsed meat trays, protective packaging foam, white-beaded style blocks & sheets, packing peanuts, or other packaging materials such as bubble wrap and bubble-lined envelopes.",
    dropOffLocations: "TBD"
  },
],
},
{"glass": [
  {
    img: "/assets/glass.png",
    itemName: "Glass Bottles & Jars",
    description: "Clear and colored food or beverage glasses, bottles, or jars are all eligible for recycling. (This does not include glass bakeware, mirrors, windowpanes, lightbulbs, or auto glass). Separate the lid, cap or cork from the container. If the lids are plastic or metal and as large or larger than a milk jug cap, you can place the lid in the recycling bin as well. If not, discard in the trash. Make sure the bottles are rinsed well before you place them in your recycle bin. For these items, labels CAN be left on!",
    dropOffLocations: "TBD", 
  },
  {
    itemName: "Light Bulbs",
    description: "Incandescent, halogen and most other light bulbs contain no mercury and therefore may be placed in your trash. Fluorescent light bulbs contain a small amount of mercury, a toxic metal.  Fluorescent bulbs such as CFL bulbs, tube lights, and U-shaped lights must be disposed of at a Kent County SafeChem location.",
    dropOffLocations: "TBD", 
  },
],
},
  ];
 
 
//  toggle() {
//   this.show = !this.show;
//   }
 

values :any;
category : string;


  catSelected(catIndex : string){
   const index = this.categories.findIndex(category => {
      return Object.keys(category)[0].trim() == catIndex;
    })
    this.values = this.categories[index];
    this.category = catIndex;
    console.log(this.category);
    setTimeout( () => {
      this.show = true;
    }, 0)
    this.show = false;
    return this.values;
  }

  constructor() { }

  ngOnInit() {
  }

}


