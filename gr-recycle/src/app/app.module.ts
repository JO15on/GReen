import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecycleItemComponent } from './recycle-item/recycle-item.component';
import { ResourcesComponent } from './resources/resources.component';
import { ReportMissingComponent } from './report-missing/report-missing.component';
import { FindRouteComponent } from './find-route/find-route.component';
import { LocationsComponent } from './locations/locations.component';
import { DatePipePipe } from './date-pipe.pipe';
import { DatePipe } from './date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RecycleItemComponent,
    ResourcesComponent,
    ReportMissingComponent,
    FindRouteComponent,
    LocationsComponent,
    DatePipePipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


