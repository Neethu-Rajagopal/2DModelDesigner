import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { ALL_ROUTES } from "@app/Routes/all-routes";

const routes: Routes = [
  {
    path: '',
    component : HomeLayoutComponent,
    children : ALL_ROUTES
  },
  {
    path: 'designer',
    component : HomeLayoutComponent,
    children : ALL_ROUTES,
    pathMatch: 'full'
  },
  {
    path: 'configure',
    component : HomeLayoutComponent,
    children : ALL_ROUTES,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
