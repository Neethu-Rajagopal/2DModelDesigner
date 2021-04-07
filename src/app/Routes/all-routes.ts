import { Routes } from "@angular/router";


export const ALL_ROUTES: Routes = [
  {
    path: "configure",
    loadChildren: async () => (await import('@app/Modules/Configure/configure.module')).ConfigureModule,
  },
  {
    path: "designer",
    loadChildren: async () => (await import('@app/Modules/Home/home.module')).HomeModule,
  },
  { path: '', pathMatch: 'full', redirectTo: 'designer' }
];
