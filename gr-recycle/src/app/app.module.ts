import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecycleItemComponent } from './recycle-item/recycle-item.component';
import { ResourcesComponent } from './resources/resources.component';
import { ReportMissingComponent } from './report-missing/report-missing.component';
import { FindRouteComponent } from './find-route/find-route.component';
import { HomeComponent } from './home/home.component';
import { AutomotiveComponent } from './recycle-item/automotive/automotive.component';
import { ConstructionComponent } from './recycle-item/construction/construction.component';
import { GlassComponent } from './recycle-item/glass/glass.component';
import { HolidayComponent } from './recycle-item/holiday/holiday.component';
import { MetalComponent } from './recycle-item/metal/metal.component';
import { PackagingComponent } from './recycle-item/packaging/packaging.component';
import { PaperComponent } from './recycle-item/paper/paper.component';
import { TextilesComponent } from './recycle-item/textiles/textiles.component';
import { BatteriesComponent } from './recycle-item/batteries/batteries.component';
import { ElectronicsComponent } from './recycle-item/electronics/electronics.component';
import { HazardousComponent } from './recycle-item/hazardous/hazardous.component';
import { HouseholdComponent } from './recycle-item/household/household.component';
import { OrganicWasteComponent } from './recycle-item/organic-waste/organic-waste.component';
import { PaintComponent } from './recycle-item/paint/paint.component';
import { PlasticComponent } from './recycle-item/plastic/plastic.component';

@NgModule({
  declarations: [
    AppComponent,
    RecycleItemComponent,
    ResourcesComponent,
    ReportMissingComponent,
    FindRouteComponent,
    HomeComponent,
    AutomotiveComponent,
    ConstructionComponent,
    GlassComponent,
    HolidayComponent,
    MetalComponent,
    PackagingComponent,
    PaperComponent,
    TextilesComponent,
    BatteriesComponent,
    ElectronicsComponent,
    HazardousComponent,
    HouseholdComponent,
    OrganicWasteComponent,
    PaintComponent,
    PlasticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
