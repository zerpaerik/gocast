import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanesService, Plan } from './planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html'
})
export class PlanesComponent implements OnInit {
  planes: Plan[] = [];
  mostrarConfirmacion = false;
  planAEliminar: number | null = null;

  constructor(
    private planesService: PlanesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPlanes();
  }

  cargarPlanes(): void {
    this.planesService.getPlanes().subscribe(planes => {
      this.planes = planes;
    });
  }

  crearNuevoPlan(): void {
    this.router.navigate(['/apps/planes/nuevo']);
  }

  editarPlan(id: number): void {
    this.router.navigate(['/apps/planes/editar', id]);
  }

  confirmarEliminacion(id: number): void {
    this.planAEliminar = id;
    this.mostrarConfirmacion = true;
  }

  eliminarPlan(): void {
    if (this.planAEliminar) {
      this.planesService.eliminarPlan(this.planAEliminar).subscribe(() => {
        this.cargarPlanes();
        this.cerrarConfirmacion();
      });
    }
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacion = false;
    this.planAEliminar = null;
  }
}