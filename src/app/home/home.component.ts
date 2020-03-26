import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {

  imgPath = "url('assets/blue_bridge.JPG')";
  isDialogClosed: boolean = false;
  refusePickupDate: Date;
  recyclePickupDate: Date;
  submittedLocation: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dialog: MatDialog,
    private _share : ShareService,
    private _getPickupDate: GetPickupDateService) { }

  ngOnInit() {
    if (!this._share.closeDialog) {
      this.dialog.open(LandingComponent);
    }
    this._share.setHomeView(true);
    this._share.getLocation().subscribe((coords) => {
      this.submittedLocation = this._share.userSubmittedLocation;
      this._getPickupDate.getRoute(coords.coords, true);
      this._getPickupDate.getRoute(coords.coords, false);
      this.refusePickupDate = this._getPickupDate.refusePickupDate;
      this.recyclePickupDate = this._getPickupDate.recyclePickupDate;
      // this.userRouteInfo = this._getPickupDate.refuseRouteInfo;
    });
  }

  showFeed() {
    this.router.navigate(['feed'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this._share.setHomeView(false)
  }

}
