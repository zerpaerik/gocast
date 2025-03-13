import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchSolicitudesService, Solicitud } from './search-solicitudes.service';

@Component({
  selector: 'app-search-solicitudes',
  templateUrl: './search-solicitudes.component.html',
  styleUrls: ['./search-solicitudes.component.scss']
})
export class SearchSolicitudesComponent {
  searchForm: FormGroup;
  editForm: FormGroup;
  solicitudes: Solicitud[] = [];
  solicitudSeleccionada: Solicitud | null = null;
  mostrarDetalle = false;
  modoEdicion = false;
  ubicaciones: string[] = [];
  proveedores: string[] = [];
  serviciosDisponibles: string[] = [];
  serviciosSeleccionados: string[] = [];

  constructor(
    private fb: FormBuilder,
    private searchService: SearchSolicitudesService
  ) {
    this.searchForm = this.fb.group({
      criterio: ['', Validators.required]
    });

    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      companiaSeguro: ['', Validators.required],
      numeroPoliza: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      proveedor: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  buscar(): void {
    const criterio = this.searchForm.get('criterio')?.value;
    if (criterio) {
      this.searchService.buscarSolicitudes(criterio)
        .subscribe(resultados => {
          this.solicitudes = resultados;
          this.mostrarDetalle = false;
          this.solicitudSeleccionada = null;
          this.modoEdicion = false;
        });
    }
  }

  verDetalle(solicitud: Solicitud): void {
    this.solicitudSeleccionada = solicitud;
    this.mostrarDetalle = true;
    this.modoEdicion = false;
    this.cargarDatosEdicion();
  }

  cargarDatosEdicion(): void {
    this.searchService.getUbicaciones().subscribe(ubicaciones => this.ubicaciones = ubicaciones);
    this.searchService.getProveedores().subscribe(proveedores => this.proveedores = proveedores);
    this.searchService.getServiciosDisponibles().subscribe(servicios => this.serviciosDisponibles = servicios);
    
    if (this.solicitudSeleccionada) {
      this.editForm.patchValue({
        nombre: this.solicitudSeleccionada.nombre,
        apellido: this.solicitudSeleccionada.apellido,
        cedula: this.solicitudSeleccionada.cedula,
        companiaSeguro: this.solicitudSeleccionada.companiaSeguro,
        numeroPoliza: this.solicitudSeleccionada.numeroPoliza,
        origen: this.solicitudSeleccionada.origen,
        destino: this.solicitudSeleccionada.destino,
        proveedor: this.solicitudSeleccionada.proveedor,
        estado: this.solicitudSeleccionada.estado
      });
      this.serviciosSeleccionados = this.solicitudSeleccionada.servicios || [];
    }
  }

  toggleEdicion(): void {
    this.modoEdicion = !this.modoEdicion;
    if (this.modoEdicion) {
      this.cargarDatosEdicion();
    }
  }

  toggleServicio(servicio: string): void {
    const index = this.serviciosSeleccionados.indexOf(servicio);
    if (index === -1) {
      this.serviciosSeleccionados.push(servicio);
    } else {
      this.serviciosSeleccionados.splice(index, 1);
    }
  }

  isServicioSeleccionado(servicio: string): boolean {
    return this.serviciosSeleccionados.includes(servicio);
  }

  guardarCambios(): void {
    if (this.editForm.valid && this.solicitudSeleccionada) {
      const solicitudActualizada: Solicitud = {
        ...this.solicitudSeleccionada,
        ...this.editForm.value,
        servicios: this.serviciosSeleccionados
      };

      this.searchService.actualizarSolicitud(solicitudActualizada)
        .subscribe(solicitud => {
          this.solicitudSeleccionada = solicitud;
          this.modoEdicion = false;
        });
    }
  }

  volver(): void {
    this.mostrarDetalle = false;
    this.solicitudSeleccionada = null;
    this.modoEdicion = false;
  }

  cancelarEdicion(): void {
    this.modoEdicion = false;
    if (this.solicitudSeleccionada) {
      this.cargarDatosEdicion();
    }
  }
}