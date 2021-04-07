import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./Components/home/home.component";
import { HomeSideBarComponent } from './Components/home-side-bar/home-side-bar.component';
import { CardViewComponent } from './Components/card-view/card-view.component';
import { ListViewComponent } from './Components/list-view/list-view.component';
import { TwinactionComponent } from './Components/twinaction/twinaction.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeSideBarComponent,
    CardViewComponent,
    ListViewComponent,
    TwinactionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
