import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-route',
  templateUrl: './find-route.component.html',
  styleUrls: ['./find-route.component.css']
})
export class FindRouteComponent implements OnInit {

  constructor() { }

  userAddress: string;
  userZIP: string;

  ngOnInit() {
  }

  locateUser() {

  }

}