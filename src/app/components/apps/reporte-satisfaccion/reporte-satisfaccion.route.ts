import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteSatisfaccionComponent } from './reporte-satisfaccion.component';

export const routes: Routes = [
    {
        path: '',
        component: ReporteSatisfaccionComponent,
        data: { 
            title: 'Reporte de Satisfacción',
            breadcrumb: 'Reporte de Satisfacción'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReporteSatisfaccionRoutingModule { }