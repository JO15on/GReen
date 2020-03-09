import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecycleItemComponent } from './components/recycle-item/recycle-item.component';
import { OrderServiceComponent } from './components/order-service/order-service.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReportMissingComponent } from './components/report-missing/report-missing.component';

@NgModule({
  declarations: [
    AppComponent,
    RecycleItemComponent,
    OrderServiceComponent,
    LocationsComponent,
    ResourcesComponent,
    ReportMissingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
