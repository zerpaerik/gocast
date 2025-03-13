import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Plan {
  id: number;
  nombre: string;
  descripcion: string;
  usosMensuales: number;
  activo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private planes: Plan[] = [
    {
      id: 1,
      nombre: 'Plan Básico',
      descripcion: 'Cobertura básica de servicios médicos',
      usosMensuales: 3,
      activo: true
    },
    {
      id: 2,
      nombre: 'Plan Premium',
      descripcion: 'Cobertura completa con servicios adicionales',
      usosMensuales: 5,
      activo: true
    },
    {
      id: 3,
      nombre: 'Plan Familiar',
      descripcion: 'Cobertura extendida para toda la familia',
      usosMensuales: 8,
      activo: true
    }
  ];

  getPlanes(): Observable<Plan[]> {
    return of(this.planes.filter(plan => plan.activo));
  }

  getPlanById(id: number): Observable<Plan | undefined> {
    return of(this.planes.find(plan => plan.id === id));
  }

  crearPlan(plan: Omit<Plan, 'id' | 'activo'>): Observable<Plan> {
    const newPlan: Plan = {
      ...plan,
      id: Math.max(...this.planes.map(p => p.id)) + 1,
      activo: true
    };
    this.planes.push(newPlan);
    return of(newPlan);
  }

  actualizarPlan(plan: Plan): Observable<Plan> {
    const index = this.planes.findIndex(p => p.id === plan.id);
    if (index !== -1) {
      this.planes[index] = { ...plan };
      return of(this.planes[index]);
    }
    return of(plan);
  }

  eliminarPlan(id: number): Observable<boolean> {
    const index = this.planes.findIndex(p => p.id === id);
    if (index !== -1) {
      this.planes[index].activo = false; // Soft delete
      return of(true);
    }
    return of(false);
  }
}