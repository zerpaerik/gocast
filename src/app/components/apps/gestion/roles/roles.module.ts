import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () => import('./roles.component').then(m => m.RolesComponent)
      },
      {
        path: 'nuevo',
        loadComponent: () => import('./roles-new/roles-new.component').then(m => m.RolesNewComponent)
      }
    ])
  ]
})
export class RolesModule { }
