import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindRouteComponent } from './find-route/find-route.component';
import { LocationsComponent } from './locations/locations.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { GoogleMapsService } from './services/google-maps.service';
import { ShareService } from './services/share.service';
import { ChangeBackgroundImgDirective } from './directives/change-background-img.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserAnimationsModule 
  ],
  providers: [GoogleMapsService, ShareService],
  bootstrap: [AppComponent]
})

export class AppModule { }


