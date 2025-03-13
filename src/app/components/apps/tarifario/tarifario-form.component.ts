import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarifariosService, Tarifario, Proveedor } from './tarifarios.service';

@Component({
  selector: 'app-tarifario-form',
  templateUrl: './tarifario-form.component.html'
})
export class TarifarioFormComponent implements OnInit {
  tarifarioForm: FormGroup;
  modoEdicion = false;
  tarifarioId: number | null = null;
  estados: string[] = [];
  tiposVehiculo: { id: string, nombre: string }[] = [];
  proveedores: Proveedor[] = [];

  constructor(
    private fb: FormBuilder,
    private tarifariosService: TarifariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tarifarioForm = this.fb.group({
      estado: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      costoPorKilometro: ['', [Validators.required, Validators.min(0.01)]],
      esParaProveedor: [false],
      proveedorId: [null]
    });

    // Escuchar cambios en esParaProveedor
    this.tarifarioForm.get('esParaProveedor')?.valueChanges.subscribe(esParaProveedor => {
      const proveedorControl = this.tarifarioForm.get('proveedorId');
      if (esParaProveedor) {
        proveedorControl?.setValidators(Validators.required);
      } else {
        proveedorControl?.clearValidators();
        proveedorControl?.setValue(null);
      }
      proveedorControl?.updateValueAndValidity();
    });
  }

  ngOnInit(): void {
    this.estados = this.tarifariosService.getEstados();
    this.tiposVehiculo = this.tarifariosService.getTiposVehiculo();
    this.tarifariosService.getProveedores().subscribe(proveedores => {
      this.proveedores = proveedores;
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.modoEdicion = true;
      this.tarifarioId = +id;
      this.cargarTarifario(this.tarifarioId);
    }
  }

  cargarTarifario(id: number): void {
    this.tarifariosService.getTarifarioById(id).subscribe(tarifario => {
      if (tarifario) {
        this.tarifarioForm.patchValue({
          estado: tarifario.estado,
          tipoVehiculo: tarifario.tipoVehiculo,
          costoPorKilometro: tarifario.costoPorKilometro,
          esParaProveedor: !!tarifario.proveedorId,
          proveedorId: tarifario.proveedorId || null
        });
      }
    });
  }

  guardar(): void {
    if (this.tarifarioForm.valid) {
      const formValue = this.tarifarioForm.value;
      const tarifarioData = {
        estado: formValue.estado,
        tipoVehiculo: formValue.tipoVehiculo,
        costoPorKilometro: formValue.costoPorKilometro,
        proveedorId: formValue.esParaProveedor ? formValue.proveedorId : null
      };

      if (this.modoEdicion && this.tarifarioId) {
        const tarifarioActualizado: Tarifario = {
          id: this.tarifarioId,
          ...tarifarioData,
          activo: true
        };
        this.tarifariosService.actualizarTarifario(tarifarioActualizado).subscribe(() => {
          this.router.navigate(['/apps/tarifarios']);
        });
      } else {
        this.tarifariosService.crearTarifario(tarifarioData).subscribe(() => {
          this.router.navigate(['/apps/tarifarios']);
        });
      }
    }
  }

  cancelar(): void {
    this.router.navigate(['/apps/tarifarios']);
  }
}