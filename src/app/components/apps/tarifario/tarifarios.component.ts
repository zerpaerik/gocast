import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarifariosService, Tarifario, Proveedor } from './tarifarios.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tarifarios',
  templateUrl: './tarifarios.component.html'
})
export class TarifariosComponent implements OnInit {
  tarifarios: (Tarifario & { proveedorNombre?: string })[] = [];
  mostrarConfirmacion = false;
  tarifarioAEliminar: number | null = null;
  tiposVehiculo: { id: string, nombre: string }[] = [];
  proveedores: Proveedor[] = [];

  constructor(
    private tarifariosService: TarifariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
    this.tiposVehiculo = this.tarifariosService.getTiposVehiculo();
  }

  cargarDatos(): void {
    forkJoin({
      tarifarios: this.tarifariosService.getTarifarios(),
      proveedores: this.tarifariosService.getProveedores()
    }).subscribe(({ tarifarios, proveedores }) => {
      this.proveedores = proveedores;
      this.tarifarios = tarifarios.map(tarifario => ({
        ...tarifario,
        proveedorNombre: tarifario.proveedorId 
          ? proveedores.find(p => p.id === tarifario.proveedorId)?.nombre 
          : undefined
      }));
    });
  }

  getTipoVehiculoNombre(tipo: string): string {
    return this.tiposVehiculo.find(t => t.id === tipo)?.nombre || tipo;
  }

  crearNuevoTarifario(): void {
    this.router.navigate(['/apps/tarifarios/nuevo']);
  }

  editarTarifario(id: number): void {
    this.router.navigate(['/apps/tarifarios/editar', id]);
  }

  confirmarEliminacion(id: number): void {
    this.tarifarioAEliminar = id;
    this.mostrarConfirmacion = true;
  }

  eliminarTarifario(): void {
    if (this.tarifarioAEliminar) {
      this.tarifariosService.eliminarTarifario(this.tarifarioAEliminar).subscribe(() => {
        this.cargarDatos();
        this.cerrarConfirmacion();
      });
    }
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacion = false;
    this.tarifarioAEliminar = null;
  }
}