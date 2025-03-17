import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'apps/gestion/roles',
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class rolesRoutingModule {
  static routes = admin;
}