import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReporteServiciosService } from './reporte-servicios.service';
import { ReporteServicio, FiltrosReporte } from './reporte-servicios.interface';

@Component({
    selector: 'app-reporte-servicios',
    templateUrl: './reporte-servicios.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ReporteServiciosService]
})
export class ReporteServiciosComponent implements OnInit {
    filtrosForm!: FormGroup; 
    servicios: ReporteServicio[] = [];
    companiasSeguros: string[] = [];
    mostrarResultados = false;

    constructor(
        private fb: FormBuilder,
        private reporteServiciosService: ReporteServiciosService
    ) {
        this.initForm(); 
    }

    ngOnInit(): void {
        this.companiasSeguros = this.reporteServiciosService.getCompaniasSeguros();
    }

    private initForm(): void {
        this.filtrosForm = this.fb.group({
            companiaSeguros: ['', Validators.required],
            fechaDesde: ['', Validators.required],
            fechaHasta: ['', Validators.required]
        });

        // Validar que fecha hasta no sea menor que fecha desde
        this.filtrosForm.get('fechaHasta')?.valueChanges.subscribe(value => {
            const fechaDesde = this.filtrosForm.get('fechaDesde')?.value;
            if (fechaDesde && value && new Date(value) < new Date(fechaDesde)) {
                this.filtrosForm.get('fechaHasta')?.setErrors({ fechaInvalida: true });
            }
        });
    }

    buscar(): void {
        if (this.filtrosForm.valid) {
            const filtros: FiltrosReporte = {
                companiaSeguros: this.filtrosForm.get('companiaSeguros')?.value,
                fechaDesde: new Date(this.filtrosForm.get('fechaDesde')?.value),
                fechaHasta: new Date(this.filtrosForm.get('fechaHasta')?.value)
            };

            this.reporteServiciosService.getServicios(filtros).subscribe({
                next: (datos) => {
                    this.servicios = datos;
                    this.mostrarResultados = true;
                },
                error: (error) => {
                    console.error('Error al obtener servicios:', error);
                    this.servicios = [];
                    this.mostrarResultados = true;
                }
            });
        } else {
            Object.keys(this.filtrosForm.controls).forEach(key => {
                const control = this.filtrosForm.get(key);
                if (control?.invalid) {
                    control.markAsTouched();
                }
            });
        }
    }

    limpiar(): void {
        this.filtrosForm.reset();
        this.servicios = [];
        this.mostrarResultados = false;
    }

    exportarCSV(): void {
        if (this.servicios.length > 0) {
            this.reporteServiciosService.exportarCSV(this.servicios);
        }
    }

    exportarPDF(): void {
        if (this.servicios.length > 0) {
            this.reporteServiciosService.exportarPDF(this.servicios);
        }
    }

    formatearMonto(monto: number): string {
        return monto.toLocaleString('es-VE', {
            style: 'currency',
            currency: 'VES',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    get fechaDesdeControl() { return this.filtrosForm.get('fechaDesde'); }
    get fechaHastaControl() { return this.filtrosForm.get('fechaHasta'); }
    get companiaSegurosControl() { return this.filtrosForm.get('companiaSeguros'); }
}