import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapProveedoresComponent } from './map-proveedores.component';

export const routes: Routes = [
    {
        path: '',
        component: MapProveedoresComponent,
        data: { 
            title: 'Mapa de Proveedores',
            breadcrumb: 'Mapa de Proveedores'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapProveedoresRoutingModule { }