import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfigureLayoutComponent } from "./Components/configure-layout/configure-layout.component";

const routes: Routes = [
  {
      path:"",
      component: ConfigureLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigureRoutingModule {}
