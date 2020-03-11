import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
  }

  showNotification() {
    this.router.navigate(['notification'], {relativeTo: this.route});
  }

}
