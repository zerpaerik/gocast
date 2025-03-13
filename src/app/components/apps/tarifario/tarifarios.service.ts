import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Proveedor {
  id: number;
  nombre: string;
  activo: boolean;
}

export interface Tarifario {
  id: number;
  estado: string;
  tipoVehiculo: 'estandar' | 'alta_gama';
  costoPorKilometro: number;
  activo: boolean;
  proveedorId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TarifariosService {
  private estados: string[] = [
    'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas',
    'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital',
    'Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda',
    'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira',
    'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'
  ];

  private tarifarios: Tarifario[] = [
    {
      id: 1,
      estado: 'Miranda',
      tipoVehiculo: 'estandar',
      costoPorKilometro: 5.50,
      activo: true,
      proveedorId: 1
    },
    {
      id: 2,
      estado: 'Miranda',
      tipoVehiculo: 'alta_gama',
      costoPorKilometro: 8.75,
      activo: true,
      proveedorId: 2
    }
  ];

  private proveedores: Proveedor[] = [
    { id: 1, nombre: 'Transportes Express', activo: true },
    { id: 2, nombre: 'Logística Rápida', activo: true },
    { id: 3, nombre: 'Servicios de Transporte VIP', activo: true },
    { id: 4, nombre: 'Transportes del Este', activo: true }
  ];

  getTarifarios(): Observable<Tarifario[]> {
    return of(this.tarifarios.filter(t => t.activo));
  }

  getEstados(): string[] {
    return this.estados;
  }

  getTiposVehiculo(): { id: string, nombre: string }[] {
    return [
      { id: 'estandar', nombre: 'Estándar' },
      { id: 'alta_gama', nombre: 'Alta Gama' }
    ];
  }

  getTarifarioById(id: number): Observable<Tarifario | undefined> {
    return of(this.tarifarios.find(t => t.id === id));
  }

  getProveedores(): Observable<Proveedor[]> {
    return of(this.proveedores.filter(p => p.activo));
  }

  crearTarifario(tarifario: Omit<Tarifario, 'id' | 'activo'>): Observable<Tarifario> {
    const newTarifario: Tarifario = {
      ...tarifario,
      id: Math.max(...this.tarifarios.map(t => t.id)) + 1,
      activo: true
    };
    this.tarifarios.push(newTarifario);
    return of(newTarifario);
  }

  actualizarTarifario(tarifario: Tarifario): Observable<Tarifario> {
    const index = this.tarifarios.findIndex(t => t.id === tarifario.id);
    if (index !== -1) {
      this.tarifarios[index] = { ...tarifario };
      return of(this.tarifarios[index]);
    }
    return of(tarifario);
  }

  eliminarTarifario(id: number): Observable<boolean> {
    const index = this.tarifarios.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tarifarios[index].activo = false; // Soft delete
      return of(true);
    }
    return of(false);
  }
}