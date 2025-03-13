import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'apps/seguros',children:[
    {
      path: 'seguros',
      loadComponent: () =>
        import('./seguros.component').then((m) => m.SegurosComponent),
    },
    {
        path: 'seguros-new',
        loadComponent: () =>
          import('./seguros-new/seguros-new.component').then((m) => m.SegurosNewComponent),
      }
  
   
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class segurosRoutingModule {
  static routes = admin;
}