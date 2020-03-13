import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recycle-item',
  templateUrl: './recycle-item.component.html',
  styleUrls: ['./recycle-item.component.css'],

})
export class RecycleItemComponent implements OnInit {
@Input() values : any;

  constructor() { }

  ngOnInit() {
  }

}
