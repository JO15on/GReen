import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecycleItemComponent } from './components/recycle-item/recycle-item.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReportMissingComponent } from './components/report-missing/report-missing.component';
import { FindRouteComponent } from './components/find-route/find-route.component';
import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './pages/home/components/feed/feed.component';
import { NotificationComponent } from './pages/home/components/feed/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    RecycleItemComponent,
    ResourcesComponent,
    ReportMissingComponent,
    FindRouteComponent,
    HomeComponent,
    FeedComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
