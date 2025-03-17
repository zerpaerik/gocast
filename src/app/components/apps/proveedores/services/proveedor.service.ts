import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Proveedor } from '../models/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private proveedores: Proveedor[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      cedula: 'V-12345678',
      telefono: '0414-1234567',
      rif: 'J-12345678-9',
      tipoServicio: 'Grua',
      servicioGrua: {
        tipo: 'Plataforma',
        modelo: '2020',
        marca: 'Ford',
        capacidad: '3 toneladas',
        servicios: ['Remolque', 'Traslado', 'Rescate']
      }
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      cedula: 'V-87654321',
      telefono: '0424-7654321',
      rif: 'V-87654321-0',
      tipoServicio: 'Moto',
      servicioMoto: {
        tipo: 'Motocicleta de servicio',
        marca: 'Honda',
        modelo: 'XR250',
        servicios: ['Gasolina', 'Cerrajería']
      }
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'Rodríguez',
      cedula: 'V-98765432',
      telefono: '0412-9876543',
      rif: 'V-98765432-1',
      tipoServicio: 'Bateria',
      servicioBateria: {
        tipoVehiculo: 'Camioneta',
        marca: 'Toyota',
        modelo: 'Hilux',
        color: 'Blanco',
        año: 2022
      }
    }
  ];

  private proveedoresSubject = new BehaviorSubject<Proveedor[]>(this.proveedores);

  getProveedores(): Observable<Proveedor[]> {
    return this.proveedoresSubject.asObservable();
  }

  getProveedorById(id: number): Observable<Proveedor | undefined> {
    return of(this.proveedores.find(p => p.id === id));
  }

  agregarProveedor(proveedor: Proveedor): void {
    const nuevoId = Math.max(...this.proveedores.map(p => p.id || 0)) + 1;
    const nuevoProveedor = { ...proveedor, id: nuevoId };
    this.proveedores = [...this.proveedores, nuevoProveedor];
    this.proveedoresSubject.next(this.proveedores);
  }

  actualizarProveedor(proveedor: Proveedor): void {
    this.proveedores = this.proveedores.map(p => 
      p.id === proveedor.id ? proveedor : p
    );
    this.proveedoresSubject.next(this.proveedores);
  }

  eliminarProveedor(id: number): void {
    this.proveedores = this.proveedores.filter(p => p.id !== id);
    this.proveedoresSubject.next(this.proveedores);
  }
}