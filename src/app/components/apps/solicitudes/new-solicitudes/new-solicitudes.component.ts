import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewSolicitudService, Usuario, Ubicacion, Proveedor, Servicio } from './new-solicitudes.service';

@Component({
  selector: 'app-new-solicitud',
  templateUrl: './new-solicitudes.component.html'
})
export class NewSolicitudComponent implements OnInit {
  searchForm: FormGroup;
  solicitudForm: FormGroup;
  usuario: Usuario | null = null;
  ubicaciones: Ubicacion[] = [];
  proveedores: Proveedor[] = [];
  servicios: Servicio[] = [];
  serviciosSeleccionados: Servicio[] = [];
  mostrarFormulario = false;

  constructor(
    private fb: FormBuilder,
    private solicitudService: NewSolicitudService
  ) {
    this.searchForm = this.fb.group({
      cedula: ['', Validators.required]
    });

    this.solicitudForm = this.fb.group({
      origenId: ['', Validators.required],
      destinoId: ['', Validators.required],
      proveedorId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.solicitudService.getUbicaciones().subscribe(ubicaciones => this.ubicaciones = ubicaciones);
    this.solicitudService.getProveedores().subscribe(proveedores => this.proveedores = proveedores);
    this.solicitudService.getServicios().subscribe(servicios => this.servicios = servicios);
  }

  buscarUsuario(): void {
    const cedula = this.searchForm.get('cedula')?.value;
    if (cedula) {
      this.solicitudService.buscarUsuario(cedula).subscribe(usuario => {
        this.usuario = usuario || null;
        this.mostrarFormulario = !!usuario;
      });
    }
  }

  toggleServicio(servicio: Servicio): void {
    const index = this.serviciosSeleccionados.findIndex(s => s.id === servicio.id);
    if (index === -1) {
      this.serviciosSeleccionados.push(servicio);
    } else {
      this.serviciosSeleccionados.splice(index, 1);
    }
  }

  isServicioSeleccionado(servicio: Servicio): boolean {
    return this.serviciosSeleccionados.some(s => s.id === servicio.id);
  }

  guardarSolicitud(): void {
    if (this.solicitudForm.valid && this.serviciosSeleccionados.length > 0) {
      const solicitud = {
        ...this.solicitudForm.value,
        usuario: this.usuario,
        servicios: this.serviciosSeleccionados
      };
      console.log('Solicitud a guardar:', solicitud);
      // Aquí iría la lógica para guardar en la base de datos
    }
  }
}