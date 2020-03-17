import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openReminder1 : boolean = false;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
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
