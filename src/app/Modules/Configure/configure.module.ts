import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigureRoutingModule } from "./configure-routing.module";
import { ConfigureComponent } from './Components/configure/configure.component';
import { SharedModule } from '@modules/Shared/shared.module';
import { DesignComponent } from './Components/design/design.component';
import { RulerComponent } from './Components/ruler/ruler.component';
import { DesignSideBarComponent } from './Components/design-side-bar/design-side-bar.component';
import { DesignInspectorComponent } from './Components/design-inspector/design-inspector.component';
import { ConfigureLayoutComponent } from './Components/configure-layout/configure-layout.component';

@NgModule({
  declarations: [
    ConfigureComponent,
    DesignComponent,
    RulerComponent,
    DesignSideBarComponent,
    DesignInspectorComponent,
    ConfigureLayoutComponent
  ],
  imports: [
    CommonModule,
    ConfigureRoutingModule,
    SharedModule
  ]
})
export class ConfigureModule { }
