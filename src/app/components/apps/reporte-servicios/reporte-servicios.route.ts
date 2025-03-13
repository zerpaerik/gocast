import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteServiciosComponent } from './reporte-servicios.component';

export const routes: Routes = [
    {
        path: '',
        component: ReporteServiciosComponent,
        data: { 
            title: 'Reporte de Servicios',
            breadcrumb: 'Reporte de Servicios'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReporteServiciosRoutingModule { }