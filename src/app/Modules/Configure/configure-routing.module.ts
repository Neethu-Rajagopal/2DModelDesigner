import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ConfigureComponent } from "./Components/configure/configure.component";

const routes: Routes = [
  {
      path:"",
      component: ConfigureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigureRoutingModule {}
