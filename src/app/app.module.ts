import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { FindRouteComponent } from './find-route/find-route.component';
import { LocationsComponent } from './locations/locations.component';
import { LandingComponent } from './landing/landing.component'

import { ShareService } from './services/share.service';
import { GoogleMapsService } from './services/google-maps.service';

import { ChangeBackgroundImgDirective } from './directives/change-background-img.directive';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FindRouteComponent,
    LocationsComponent,
    ChangeBackgroundImgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    GoogleMapsService, 
    ShareService],
  bootstrap: [AppComponent],
  entryComponents: [
    LandingComponent,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
})

export class AppModule { }


