import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifariosComponent } from './tarifarios.component';
import { TarifarioFormComponent } from './tarifario-form.component';
import { TarifariosModule } from './tarifarios.module';

const routes: Routes = [
  {
    path: 'apps/tarifarios',
    children: [
      {
        path: '',
        component: TarifariosComponent
      },
      {
        path: 'nuevo',
        component: TarifarioFormComponent
      },
      {
        path: 'editar/:id',
        component: TarifarioFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TarifariosModule
  ],
  exports: [RouterModule]
})
export class TarifariosRoutingModule { }