import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardServiciosRoutingModule } from './dashboard-servicios-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';

@NgModule({
    declarations: [
        DashboardComponent,
        DetalleServicioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        DashboardServiciosRoutingModule
    ]
})
export class DashboardServiciosModule { }