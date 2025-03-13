import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from '../../models/servicio.interface';
import { DashboardServiciosService } from '../../services/dashboard-servicios.service';

@Component({
    selector: 'app-detalle-servicio',
    template: `
        <div class="container-fluid" *ngIf="servicio">
            <div class="card shadow">
                <div class="card-header bg-primary text-white">
                    <h3 class="mb-0">Detalle del Servicio</h3>
                </div>
                <div class="card-body">
                    <form #servicioForm="ngForm" class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tipo de Servicio</label>
                            <input type="text" class="form-control" [(ngModel)]="servicio.tipoServicio" name="tipoServicio">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Fecha y Hora</label>
                            <input type="datetime-local" class="form-control" [(ngModel)]="servicio.fechaHora" name="fechaHora">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Proveedor</label>
                            <input type="text" class="form-control" [(ngModel)]="servicio.proveedor" name="proveedor">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Asegurado</label>
                            <input type="text" class="form-control" [(ngModel)]="servicio.asegurado" name="asegurado">
                        </div>
                        <div class="col-12 mb-3">
                            <label class="form-label">Detalles</label>
                            <textarea class="form-control" rows="3" [(ngModel)]="servicio.detalles" name="detalles"></textarea>
                        </div>
                        <div class="col-12 mb-4">
                            <label class="form-label">Servicios Adicionales</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" [(ngModel)]="nuevoServicio" name="nuevoServicio" placeholder="Agregar servicio adicional">
                                <button class="btn btn-primary" type="button" (click)="agregarServicioAdicional()">
                                    <i class="fas fa-plus"></i> Agregar
                                </button>
                            </div>
                            <div class="list-group">
                                <div *ngFor="let adicional of servicio.serviciosAdicionales; let i = index" class="list-group-item d-flex justify-content-between align-items-center">
                                    {{adicional}}
                                    <button class="btn btn-sm btn-danger" type="button" (click)="eliminarServicioAdicional(i)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 d-flex gap-2">
                            <button class="btn btn-primary" type="button" (click)="guardarCambios()">
                                <i class="fas fa-save me-2"></i>Guardar Cambios
                            </button>
                            <button class="btn btn-secondary" type="button" (click)="volver()">
                                <i class="fas fa-arrow-left me-2"></i>Volver
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .card {
            border: none;
            border-radius: 0.5rem;
        }
        .card-header {
            border-radius: 0.5rem 0.5rem 0 0;
        }
        .list-group-item {
            transition: background-color 0.2s;
        }
        .list-group-item:hover {
            background-color: #f8f9fa;
        }
    `]
})
export class DetalleServicioComponent implements OnInit {
    servicio?: Servicio;
    nuevoServicio: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dashboardService: DashboardServiciosService
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.cargarServicio(id);
    }

    cargarServicio(id: number): void {
        this.dashboardService.getServicioById(id)
            .subscribe(servicio => {
                this.servicio = servicio;
                if (this.servicio && !this.servicio.serviciosAdicionales) {
                    this.servicio.serviciosAdicionales = [];
                }
            });
    }

    agregarServicioAdicional(): void {
        if (this.nuevoServicio && this.servicio) {
            if (!this.servicio.serviciosAdicionales) {
                this.servicio.serviciosAdicionales = [];
            }
            this.servicio.serviciosAdicionales.push(this.nuevoServicio);
            this.nuevoServicio = '';
        }
    }

    eliminarServicioAdicional(index: number): void {
        if (this.servicio?.serviciosAdicionales) {
            this.servicio.serviciosAdicionales.splice(index, 1);
        }
    }

    guardarCambios(): void {
        if (this.servicio) {
            this.dashboardService.actualizarServicio(this.servicio)
                .subscribe(() => this.volver());
        }
    }

    volver(): void {
        this.router.navigate(['/dashboard-servicios']);
    }
}