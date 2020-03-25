import { Injectable } from '@angular/core';
import { Inotification } from './inotification';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  notification: Inotification[] = [
   
    {
      icon: "assets/news_icon.png",
      headline: "Reopening of the Kent County Recycling & Education Center!",
      datePosted: "Posted 3/12/2020",
      description: "New and improved recycling services for Grand Rapids residents. Visit our revamped location at 977 Wealthy Street SW.",
      url: "https://www.wzzm13.com/article/news/local/kent-county-recycling-center-to-reopen-monday/69-5c1c937f-ab1e-4d72-bf6d-f2552837783f"
    },
    {
      icon: "assets/calendar_icon.png",
      headline: "Easter Holiday Collection Schedule Update",
      datePosted: "Posted 1/01/2020",
      description: "Refuse and recycling pick-ups will be pushed back by a day to accommodate the holiday schedule.",
      url: "https://www.grandrapidsmi.gov/Government/Departments/Public-Works-Department/Holiday-Delays-for-Trash-and-Recycling"
    },
    {
      icon: "assets/recycle_icon.png",
      headline: "No Longer Accepting Plastic Bags",
      datePosted: "Posted 12/19/2019",
      description: "Effective January 2020, plastic bags and other flexible plastics are no longer recyclable curbside in GR.",
      url: "http://www.reimaginetrash.org/plastic-shopping-bags-and-shredded-paper-no-longer-accepted-in-curbside-recycling/"
    },
    
  ]

  constructor() { }

  getNotifications() : Inotification[] {
    return this.notification;
  }
}
