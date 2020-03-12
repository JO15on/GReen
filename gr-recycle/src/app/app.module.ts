import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { RecycleItemComponent } from './recycle-item/recycle-item.component';
// import { ResourcesComponent } from './resources/resources.component';
// import { ReportMissingComponent } from './report-missing/report-missing.component';
import { FindRouteComponent } from './find-route/find-route.component';
<<<<<<< HEAD
import { LocationsComponent } from './locations/locations.component';
import { DatePipePipe } from './date-pipe.pipe';
import { DatePipe } from './date.pipe';
=======
// import { LocationsComponent } from './locations/locations.component';
>>>>>>> a425c06240a3dbaa4be853c10ef12e1d8e5b97dd


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // RecycleItemComponent,
    // ResourcesComponent,
    FindRouteComponent,
<<<<<<< HEAD
    LocationsComponent,
    DatePipePipe,
    DatePipe
=======
    // LocationsComponent
>>>>>>> a425c06240a3dbaa4be853c10ef12e1d8e5b97dd
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


