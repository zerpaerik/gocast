import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'apps/gestion',children:[
    {
      path: 'roles',
      loadComponent: () =>
        import('./roles/roles.component').then((m) => m.RolesComponent),
    },
    {
        path: 'roles-new',
        loadComponent: () =>
          import('./roles/roles-new/roles-new.component').then((m) => m.RolesNewComponent),
      }
  
   
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class rolesRoutingModule {
  static routes = admin;
}