import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'apps/gestion',children:[
    {
      path: 'funcionalidades',
      loadComponent: () =>
        import('./funcionalidades/funcionalidades.component').then((m) => m.FuncionalidadesComponent),
    },
    {
      path: 'funcionalidades-new',
      loadComponent: () =>
        import('./funcionalidades/funcionalidades-new/funcionalidades-new.component').then((m) => m.FuncionalidadesNewComponent),
    },
  
   
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class funcionalidadesRoutingModule {
  static routes = admin;
}