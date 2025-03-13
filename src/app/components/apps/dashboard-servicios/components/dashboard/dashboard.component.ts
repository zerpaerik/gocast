import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from '../../models/servicio.interface';
import { DashboardServiciosService } from '../../services/dashboard-servicios.service';

@Component({
    selector: 'app-dashboard',
    template: `
        <div class="container-fluid">
            <div class="row mb-4">
                <div class="col-12">
                    <h2 class="mb-3">Servicios Activos del Día</h2>
                    <div class="input-group">
                        <span class="input-group-text bg-light">
                            <i class="fas fa-search"></i>
                        </span>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Buscar por servicio, proveedor o asegurado..."
                            [(ngModel)]="filtroTexto"
                            (ngModelChange)="filtrarServicios()">
                    </div>
                </div>
            </div>
            <div class="row">
                <div *ngFor="let servicio of serviciosFiltrados" class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm cursor-pointer" 
                         [ngClass]="getCardClass(servicio.tipoServicio)"
                         (click)="verDetalle(servicio.id)">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <h5 class="card-title mb-0">{{servicio.tipoServicio}}</h5>
                                <span class="badge" [ngClass]="getBadgeClass(servicio.tipoServicio)">
                                    {{getTipoServicio(servicio.tipoServicio)}}
                                </span>
                            </div>
                            <p class="card-text">
                                <i class="fas fa-calendar-alt me-2"></i> {{servicio.fechaHora | date:'dd/MM/yyyy HH:mm'}}<br>
                                <i class="fas fa-building me-2"></i> {{servicio.proveedor}}<br>
                                <i class="fas fa-user me-2"></i> {{servicio.asegurado}}
                            </p>
                            <p *ngIf="servicio.detalles" class="card-text text-muted small mt-2">
                                <i class="fas fa-info-circle me-2"></i> {{servicio.detalles}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .cursor-pointer { 
            cursor: pointer; 
        }
        .card { 
            transition: all 0.3s ease;
            border: none;
        }
        .card:hover { 
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
        }
        .card.medical-service {
            background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
            color: #1976d2;
        }
        .card.roadside-service {
            background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
            color: #616161;
        }
        .badge {
            padding: 0.5em 0.8em;
            font-size: 0.8em;
        }
        .badge.medical {
            background-color: #1976d2;
            color: white;
        }
        .badge.roadside {
            background-color: #616161;
            color: white;
        }
    `]
})
export class DashboardComponent implements OnInit {
    servicios: Servicio[] = [];
    serviciosFiltrados: Servicio[] = [];
    filtroTexto: string = '';

    constructor(
        private dashboardService: DashboardServiciosService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cargarServicios();
    }

    cargarServicios(): void {
        this.dashboardService.getServiciosActivos()
            .subscribe(servicios => {
                this.servicios = servicios;
                this.filtrarServicios();
            });
    }

    filtrarServicios(): void {
        if (!this.filtroTexto) {
            this.serviciosFiltrados = this.servicios;
            return;
        }

        const filtro = this.filtroTexto.toLowerCase();
        this.serviciosFiltrados = this.servicios.filter(servicio => 
            servicio.tipoServicio.toLowerCase().includes(filtro) ||
            servicio.proveedor.toLowerCase().includes(filtro) ||
            servicio.asegurado.toLowerCase().includes(filtro)
        );
    }

    getCardClass(tipoServicio: string): string {
        return this.esMedico(tipoServicio) ? 'medical-service' : 'roadside-service';
    }

    getBadgeClass(tipoServicio: string): string {
        return this.esMedico(tipoServicio) ? 'medical' : 'roadside';
    }

    getTipoServicio(tipoServicio: string): string {
        return this.esMedico(tipoServicio) ? 'Médico' : 'Asistencia Vial';
    }

    esMedico(tipoServicio: string): boolean {
        const serviciosMedicos = ['Consulta Médica', 'Rayos X', 'Odontología', 'Cardiología', 'Neurología'];
        return serviciosMedicos.includes(tipoServicio);
    }

    verDetalle(id: number): void {
        this.router.navigate(['/dashboard-servicios/detalle', id]);
    }
}