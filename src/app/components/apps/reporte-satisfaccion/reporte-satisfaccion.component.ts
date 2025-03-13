import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReporteSatisfaccionService } from './reporte-satisfaccion.service';
import { DetalleSatisfaccion } from './reporte-satisfaccion.interface';

@Component({
    selector: 'app-reporte-satisfaccion',
    templateUrl: './reporte-satisfaccion.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ReporteSatisfaccionService]
})
export class ReporteSatisfaccionComponent implements OnInit {
    filtrosForm!: FormGroup;
    resultados: DetalleSatisfaccion[] = [];
    mostrarResultados = false;
    tiposServicio: string[] = [];

    constructor(
        private fb: FormBuilder,
        private reporteSatisfaccionService: ReporteSatisfaccionService
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this.tiposServicio = this.reporteSatisfaccionService.getTiposServicio();
    }

    private initForm(): void {
        this.filtrosForm = this.fb.group({
            fechaDesde: ['', Validators.required],
            fechaHasta: ['', Validators.required],
            tipoServicio: ['']
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
                fechaHasta: new Date(this.filtrosForm.get('fechaHasta')?.value),
                tipoServicio: this.filtrosForm.get('tipoServicio')?.value
            };

            this.reporteSatisfaccionService.getReporteSatisfaccion(filtros).subscribe({
                next: (datos) => {
                    this.resultados = datos;
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

    limpiar(): void {
        this.filtrosForm.reset();
        this.resultados = [];
        this.mostrarResultados = false;
    }

    exportarCSV(): void {
        if (this.resultados.length > 0) {
            this.reporteSatisfaccionService.exportarCSV(this.resultados);
        }
    }

    get fechaDesdeControl() { return this.filtrosForm.get('fechaDesde'); }
    get fechaHastaControl() { return this.filtrosForm.get('fechaHasta'); }
}