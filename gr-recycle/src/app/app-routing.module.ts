import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { ReportMissingComponent } from './report-missing/report-missing.component';
import { RecycleItemComponent } from './recycle-item/recycle-item.component';
import { ResourcesComponent } from './resources/resources.component';


const routes: Routes = [
  {
    path: 'reportmissing',
    component: ReportMissingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recycleitems',
    component: RecycleItemComponent
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
  LocationsComponent, ReportMissingComponent, 
  RecycleItemComponent, ResourcesComponent];
