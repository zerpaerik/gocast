import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSolicitudesComponent } from './search-solicitudes/search-solicitudes.component';
import { NewSolicitudComponent } from './new-solicitudes/new-solicitudes.component';
import { SearchSolicitudesModule } from './search-solicitudes/search-solicitudes.module';
import { NewSolicitudModule } from './new-solicitudes/new-solicitudes.module';

const routes: Routes = [
  {
    path: 'apps/solicitudes',
    children: [
      {
        path: 'search-solicitudes',
        component: SearchSolicitudesComponent
      },
      {
        path: 'new-solicitud',
        component: NewSolicitudComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SearchSolicitudesModule,
    NewSolicitudModule
  ],
  exports: [RouterModule]
})
export class solicitudesRoutingModule { }