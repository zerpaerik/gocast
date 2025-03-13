import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesComponent } from './planes.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { PlanesModule } from './planes.module';

const routes: Routes = [
  {
    path: 'apps/planes',
    children: [
      {
        path: '',
        component: PlanesComponent
      },
      {
        path: 'nuevo',
        component: PlanFormComponent
      },
      {
        path: 'editar/:id',
        component: PlanFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PlanesModule
  ],
  exports: [RouterModule]
})
export class planesRoutingModule { }