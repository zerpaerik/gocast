import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'apps/vehiculos',children:[
    {
      path: 'vehiculos',
      loadComponent: () =>
        import('./vehiculos.component').then((m) => m.VehiculosComponent),
    },
    {
        path: 'vehiculos-new',
        loadComponent: () =>
          import('./vehiculos-new/vehiculos-new.component').then((m) => m.VehiculosNewComponent),
      }
  
   
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class vehiculosRoutingModule {
  static routes = admin;
}