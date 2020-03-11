import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module'; 
//routingComponents holds all components declared in routing module

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FindRouteComponent } from './find-route/find-route.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FindRouteComponent,
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


