import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarifa, TipoServicio, TipoTarifa } from './tarifas.interface';
import { TarifasService } from './tarifas.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tarifas-form',
    templateUrl: './tarifas-form.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TarifasFormComponent implements OnInit {
    form: FormGroup;
    isEditing = false;
    tarifaId?: number;
    tiposServicio = Object.values(TipoServicio);
    tiposTarifa = Object.values(TipoTarifa);

    constructor(
        private fb: FormBuilder,
        private tarifasService: TarifasService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.form = this.fb.group({
            tipoServicio: ['', Validators.required],
            tipoTarifa: ['', Validators.required],
            monto: ['', [Validators.required, Validators.min(0)]]
        });
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditing = true;
            this.tarifaId = +id;
            this.cargarTarifa(this.tarifaId);
        }
    }

    cargarTarifa(id: number): void {
        this.tarifasService.getTarifa(id).subscribe(tarifa => {
            if (tarifa) {
                this.form.patchValue(tarifa);
            } else {
                this.router.navigate(['/apps/tarifas']);
            }
        });
    }

    guardar(): void {
        if (this.form.valid) {
            const tarifa = this.form.value;
            
            if (this.isEditing && this.tarifaId) {
                this.tarifasService.actualizarTarifa({ ...tarifa, id: this.tarifaId })
                    .subscribe(() => {
                        this.mostrarMensajeExito('Tarifa actualizada exitosamente');
                    });
            } else {
                this.tarifasService.crearTarifa(tarifa)
                    .subscribe(() => {
                        this.mostrarMensajeExito('Tarifa creada exitosamente');
                    });
            }
        } else {
            Object.keys(this.form.controls).forEach(key => {
                const control = this.form.get(key);
                if (control?.invalid) {
                    control.markAsTouched();
                }
            });
        }
    }

    private mostrarMensajeExito(mensaje: string): void {
        Swal.fire({
            title: '¡Éxito!',
            text: mensaje,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            this.router.navigate(['/apps/tarifas']);
        });
    }

    cancelar(): void {
        this.router.navigate(['/apps/tarifas']);
    }

    get montoControl() {
        return this.form.get('monto');
    }

    get tipoServicioControl() {
        return this.form.get('tipoServicio');
    }

    get tipoTarifaControl() {
        return this.form.get('tipoTarifa');
    }
}