import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteFinancieroComponent } from './reporte-financiero.component';

export const routes: Routes = [
    {
        path: '',
        component: ReporteFinancieroComponent,
        data: { 
            title: 'Reporte Financiero',
            breadcrumb: 'Reporte Financiero'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReporteFinancieroRoutingModule { }