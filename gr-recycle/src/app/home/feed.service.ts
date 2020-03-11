import { Injectable } from '@angular/core';
import { Inotification } from './inotification';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  notification: Inotification[] = [
   
    {
      icon: "/assets/news_icon.png",
      headline: "Reopening of the Kent County Recycling & Education Center!",
      datePosted: "Posted 3/27/2020",
      description: "New and improved recycling services for Grand Rapids residents. Visit our revamped location at 977 Wealthy Street SW.",
    },
    {
      icon: "/assets/recycle_icon.png",
      headline: "Recycling Update - No Longer Accepting Plastic Bags",
      datePosted: "Posted 3/27/2020",
      description: "Effective January 2020, plastic bags and other flexible plastics are no longer recyclable curbside in GR.",
    },
    {
      icon: "/assets/calendar_icon.png",
      headline: "Easter Holiday Collection Schedule Update",
      datePosted: "Posted 3/27/2020",
      description: "Refuse and recycling pick-ups will be pushed back by a day to accomodate the holiday schedule.",
    },
  ]

  constructor() { }

  getNotifications() : Inotification[] {
    return this.notification;
  }
}
