import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReporteFinancieroService } from './reporte-financiero.service';
import { DetalleFinanciero } from './reporte-financiero.interface';

@Component({
    selector: 'app-reporte-financiero',
    templateUrl: './reporte-financiero.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ReporteFinancieroService]
})
export class ReporteFinancieroComponent implements OnInit {
    filtrosForm!: FormGroup;
    resultados: DetalleFinanciero[] = [];
    mostrarResultados = false;
    totalIngresos = 0;
    totalGastos = 0;
    totalUtilidad = 0;

    constructor(
        private fb: FormBuilder,
        private reporteFinancieroService: ReporteFinancieroService
    ) {
        this.initForm();
    }

    ngOnInit(): void {}

    private initForm(): void {
        this.filtrosForm = this.fb.group({
            fechaDesde: ['', Validators.required],
            fechaHasta: ['', Validators.required]
        });

        this.filtrosForm.get('fechaHasta')?.valueChanges.subscribe(value => {
            const fechaDesde = this.filtrosForm.get('fechaDesde')?.value;
            if (fechaDesde && value && new Date(value) < new Date(fechaDesde)) {
                this.filtrosForm.get('fechaHasta')?.setErrors({ fechaInvalida: true });
            }
        });
    }

    buscar(): void {
        if (this.filtrosForm.valid) {
            const filtros = {
                fechaDesde: new Date(this.filtrosForm.get('fechaDesde')?.value),
                fechaHasta: new Date(this.filtrosForm.get('fechaHasta')?.value)
            };

            this.reporteFinancieroService.getReporteFinanciero(filtros).subscribe({
                next: (datos) => {
                    this.resultados = datos;
                    this.calcularTotales();
                    this.mostrarResultados = true;
                },
                error: (error) => {
                    console.error('Error al obtener reporte:', error);
                    this.resultados = [];
                    this.mostrarResultados = true;
                }
            });
        }
    }

    private calcularTotales(): void {
        this.totalIngresos = this.resultados.reduce((sum, item) => sum + item.ingresos, 0);
        this.totalGastos = this.resultados.reduce((sum, item) => sum + item.gastos, 0);
        this.totalUtilidad = this.resultados.reduce((sum, item) => sum + item.utilidad, 0);
    }

    limpiar(): void {
        this.filtrosForm.reset();
        this.resultados = [];
        this.mostrarResultados = false;
        this.totalIngresos = 0;
        this.totalGastos = 0;
        this.totalUtilidad = 0;
    }

    exportarCSV(): void {
        if (this.resultados.length > 0) {
            this.reporteFinancieroService.exportarCSV(this.resultados);
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
}