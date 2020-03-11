import { Component, OnInit, Input } from '@angular/core';
import { Inotification } from '../../inotification';
import { FeedService } from '../../feed.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() notification : Inotification;

  constructor(public service : FeedService) { }

  ngOnInit() {
  }

}
