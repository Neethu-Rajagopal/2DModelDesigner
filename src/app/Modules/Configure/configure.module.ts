import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigureRoutingModule } from "./configure-routing.module";
import { ConfigureComponent } from './Components/configure/configure.component';
import { SharedModule } from '@modules/Shared/shared.module';

@NgModule({
  declarations: [
    ConfigureComponent
  ],
  imports: [
    CommonModule,
    ConfigureRoutingModule,
    SharedModule
  ]
})
export class ConfigureModule { }
