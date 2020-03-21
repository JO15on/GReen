import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { ReportMissingComponent } from './report-missing/report-missing.component';
import { RecycleItemComponent } from './recycle-item/recycle-item.component';
import { ResourcesComponent } from './resources/resources.component';
import { FeedComponent } from './home/feed/feed.component';
import { NotificationComponent } from './home/feed/notification/notification.component';
import { CategoryComponent } from './recycle-item/category/category.component';


const routes: Routes = [
  {
    path: 'reportmissing',
    component: ReportMissingComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'feed',
        component: FeedComponent,
        children: [
          {
            path: 'notification',
            component: NotificationComponent
          }
        ]
      }
    ]
  },
  {
    path: 'recycleitems',
    component: CategoryComponent,
    children: [
      {
        path: 'items',
        component: RecycleItemComponent
      }
    ]
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, 
  LocationsComponent, ReportMissingComponent, CategoryComponent,
  RecycleItemComponent, ResourcesComponent, FeedComponent,
 NotificationComponent];
