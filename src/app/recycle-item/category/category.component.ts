import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})
export class CategoryComponent implements OnInit {

  show: boolean = false;
  categoryNames: string[] = []
  values : any;
  category : string;
  categories: any

  constructor(private _category: CategoriesService) { }

  catSelected(catIndex : string){
   const index = this.categories.findIndex(category => {
      return Object.keys(category)[0] === catIndex;
    })
    this.values = this.categories[index];
    this.category = catIndex;
    setTimeout( () => {
      this.show = true;
    }, 0)
    this.show = false;
    return this.values;
  }

  getPath(name: string) {
    return this._category.getPath(name)
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() {
    this.categories = this._category.getCategories()
    this.categories.map(category => {
      this.categoryNames.push(Object.keys(category)[0])
    })
  }
}


