import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openReminder1 : boolean = false;
  imgPath = "url('assets/blue_bridge.JPG')"

  constructor(private route: ActivatedRoute, 
    private router: Router,
    public dialog: MatDialog ){}


  ngOnInit() {
    this.dialog.open(LandingComponent);
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
