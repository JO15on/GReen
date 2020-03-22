import { Injectable } from '@angular/core';
import { default as categoryData }  from "../../assets/category-data.json"

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() {
    return categoryData
  }

  getPath(name: string) {
    return `url('assets/${name}_icon.png')`
  }
}

