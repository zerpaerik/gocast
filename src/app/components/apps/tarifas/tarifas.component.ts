import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Tarifa } from './tarifas.interface';
import { TarifasService } from './tarifas.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tarifas',
    templateUrl: './tarifas.component.html',
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class TarifasComponent implements OnInit {
    tarifas: Tarifa[] = [];

    constructor(
        private tarifasService: TarifasService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cargarTarifas();
    }

    cargarTarifas(): void {
        this.tarifasService.getTarifas().subscribe(tarifas => {
            this.tarifas = tarifas;
        });
    }

    crearTarifa(): void {
        this.router.navigate(['/apps/tarifas/crear']);
    }

    editarTarifa(id: number): void {
        this.router.navigate(['/apps/tarifas/editar', id]);
    }

    formatearMonto(monto: number): string {
        return monto.toLocaleString('es-VE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    onEliminarClick(tarifa: Tarifa): void {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Deseas eliminar la tarifa de ${tarifa.tipoServicio}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.tarifasService.eliminarTarifa(tarifa.id).subscribe(success => {
                    if (success) {
                        Swal.fire(
                            '¡Eliminado!',
                            'La tarifa ha sido eliminada.',
                            'success'
                        );
                        this.cargarTarifas();
                    }
                });
            }
        });
    }
}