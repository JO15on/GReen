import { Component, OnInit } from '@angular/core';
import { Inotification } from '../inotification';
import { FeedService } from '../feed.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
notifications : Inotification[];

  constructor(public service : FeedService) { }

  ngOnInit() {
    this.notifications = this.service.getNotifications();
  }

}
