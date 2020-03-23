import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LandingComponent } from '../landing/landing.component';
import { ShareService } from '../services/share.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openReminder1 : boolean = false;
  imgPath = "url('assets/blue_bridge.JPG')";
  isDialogClosed: boolean = false;


  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dialog: MatDialog,
    private _exit : ShareService) {}


  ngOnInit() {
    if (!this._exit.closeDialog) {
      this.dialog.open(LandingComponent);
    }
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
