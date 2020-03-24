import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LandingComponent } from '../landing/landing.component';
import { ShareService } from '../services/share.service'
import { GetPickupDateService } from '../services/get-pickup-date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openReminder1 : boolean = false;
  imgPath = "url('assets/blue_bridge.JPG')";
  isDialogClosed: boolean = false;
  refusePickupDate: Date;
  recyclePickupDate: Date;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dialog: MatDialog,
    private _exit : ShareService,
    private _getPickupDate: GetPickupDateService) { }

  ngOnInit() {
    if (!this._exit.closeDialog) {
      this.dialog.open(LandingComponent);
    }
    // If using current location, run below with userCoords
    const testCoords = { lat: 42.9634,lng: -85.6681 }
    this._getPickupDate.getRoute(testCoords, true);
    this._getPickupDate.getRoute(testCoords, false);
    this.refusePickupDate = this._getPickupDate.refusePickupDate;
    this.recyclePickupDate = this._getPickupDate.recyclePickupDate;
  }

  showFeed() {
    this.router.navigate(['feed'], {relativeTo: this.route});
  }

  openReminder(){
    if(this.openReminder1 === false){
      this.openReminder1 = true;
    };
  }


}
