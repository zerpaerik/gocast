import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor, TipoServicio } from '../../models/proveedor.interface';

@Component({
  selector: 'app-formulario-proveedor',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>{{ modoEdicion ? 'Editar' : 'Nuevo' }} Proveedor</h5>
            </div>
            <div class="card-body">
              <form [formGroup]="proveedorForm" (ngSubmit)="onSubmit()">
                <!-- Información básica -->
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Nombre</label>
                      <input type="text" class="form-control" formControlName="nombre">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Apellido</label>
                      <input type="text" class="form-control" formControlName="apellido">
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Cédula</label>
                      <input type="text" class="form-control" formControlName="cedula">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Teléfono</label>
                      <input type="text" class="form-control" formControlName="telefono">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>RIF</label>
                      <input type="text" class="form-control" formControlName="rif">
                    </div>
                  </div>
                </div>

                <!-- Tipo de Servicio -->
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Tipo de Servicio</label>
                      <select class="form-control" formControlName="tipoServicio" (change)="onTipoServicioChange()">
                        <option value="">Seleccione...</option>
                        <option value="Grua">Grúa</option>
                        <option value="Moto">Moto</option>
                        <option value="Bateria">Batería</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Formulario Grúa -->
                <div *ngIf="proveedorForm.get('tipoServicio')?.value === 'Grua'" formGroupName="servicioGrua">
                  <h6 class="mb-3">Información de la Grúa</h6>
                  <div class="row mb-3">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Tipo</label>
                        <input type="text" class="form-control" formControlName="tipo">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Modelo</label>
                        <input type="text" class="form-control" formControlName="modelo">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Marca</label>
                        <input type="text" class="form-control" formControlName="marca">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Capacidad</label>
                        <input type="text" class="form-control" formControlName="capacidad">
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Servicios</label>
                        <select multiple class="form-control" formControlName="servicios">
                          <option value="Remolque">Remolque</option>
                          <option value="Traslado">Traslado</option>
                          <option value="Rescate">Rescate</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Formulario Moto -->
                <div *ngIf="proveedorForm.get('tipoServicio')?.value === 'Moto'" formGroupName="servicioMoto">
                  <h6 class="mb-3">Información de la Moto</h6>
                  <div class="row mb-3">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Tipo</label>
                        <input type="text" class="form-control" formControlName="tipo">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Marca</label>
                        <input type="text" class="form-control" formControlName="marca">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Modelo</label>
                        <input type="text" class="form-control" formControlName="modelo">
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Servicios</label>
                        <select multiple class="form-control" formControlName="servicios">
                          <option value="Gasolina">Gasolina</option>
                          <option value="Cerrajería">Cerrajería</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Formulario Batería -->
                <div *ngIf="proveedorForm.get('tipoServicio')?.value === 'Bateria'" formGroupName="servicioBateria">
                  <h6 class="mb-3">Información del Vehículo</h6>
                  <div class="row mb-3">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Tipo de Vehículo</label>
                        <input type="text" class="form-control" formControlName="tipoVehiculo">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Marca</label>
                        <input type="text" class="form-control" formControlName="marca">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Modelo</label>
                        <input type="text" class="form-control" formControlName="modelo">
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Color</label>
                        <input type="text" class="form-control" formControlName="color">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Año</label>
                        <input type="number" class="form-control" formControlName="año">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary me-2" [disabled]="!proveedorForm.valid">
                      {{ modoEdicion ? 'Actualizar' : 'Guardar' }}
                    </button>
                    <button type="button" class="btn btn-secondary" (click)="cancelar()">
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class FormularioProveedorComponent implements OnInit {
  proveedorForm: FormGroup;
  modoEdicion = false;
  proveedorId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private proveedorService: ProveedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.proveedorForm = this.crearFormulario();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.modoEdicion = true;
        this.proveedorId = +params['id'];
        this.cargarProveedor(this.proveedorId);
      }
    });
  }

  crearFormulario(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      rif: ['', Validators.required],
      tipoServicio: ['', Validators.required],
      servicioGrua: this.fb.group({
        tipo: [''],
        modelo: [''],
        marca: [''],
        capacidad: [''],
        servicios: [[]]
      }),
      servicioMoto: this.fb.group({
        tipo: [''],
        marca: [''],
        modelo: [''],
        servicios: [[]]
      }),
      servicioBateria: this.fb.group({
        tipoVehiculo: [''],
        marca: [''],
        modelo: [''],
        color: [''],
        año: [null]
      })
    });
  }

  cargarProveedor(id: number): void {
    this.proveedorService.getProveedorById(id).subscribe(proveedor => {
      if (proveedor) {
        this.proveedorForm.patchValue(proveedor);
      }
    });
  }

  onTipoServicioChange(): void {
    const tipoServicio = this.proveedorForm.get('tipoServicio')?.value as TipoServicio;
    
    // Resetear todos los grupos de servicio
    this.proveedorForm.get('servicioGrua')?.reset();
    this.proveedorForm.get('servicioMoto')?.reset();
    this.proveedorForm.get('servicioBateria')?.reset();

    // Actualizar validadores según el tipo de servicio
    switch (tipoServicio) {
      case 'Grua':
        this.agregarValidadoresGrua();
        break;
      case 'Moto':
        this.agregarValidadoresMoto();
        break;
      case 'Bateria':
        this.agregarValidadoresBateria();
        break;
    }
  }

  agregarValidadoresGrua(): void {
    const gruaGroup = this.proveedorForm.get('servicioGrua') as FormGroup;
    if (gruaGroup) {
      Object.keys(gruaGroup.controls).forEach(key => {
        gruaGroup.get(key)?.setValidators(Validators.required);
        gruaGroup.get(key)?.updateValueAndValidity();
      });
    }
  }

  agregarValidadoresMoto(): void {
    const motoGroup = this.proveedorForm.get('servicioMoto') as FormGroup;
    if (motoGroup) {
      Object.keys(motoGroup.controls).forEach(key => {
        motoGroup.get(key)?.setValidators(Validators.required);
        motoGroup.get(key)?.updateValueAndValidity();
      });
    }
  }

  agregarValidadoresBateria(): void {
    const bateriaGroup = this.proveedorForm.get('servicioBateria') as FormGroup;
    if (bateriaGroup) {
      Object.keys(bateriaGroup.controls).forEach(key => {
        bateriaGroup.get(key)?.setValidators(Validators.required);
        bateriaGroup.get(key)?.updateValueAndValidity();
      });
    }
  }

  onSubmit(): void {
    if (this.proveedorForm.valid) {
      const proveedor = this.proveedorForm.value;
      
      if (this.modoEdicion && this.proveedorId) {
        proveedor.id = this.proveedorId;
        this.proveedorService.actualizarProveedor(proveedor);
      } else {
        this.proveedorService.agregarProveedor(proveedor);
      }
      
      this.router.navigate(['/proveedores']);
    }
  }

  cancelar(): void {
    this.router.navigate(['/proveedores']);
  }
}