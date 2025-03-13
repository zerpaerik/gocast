import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  poliza: string;
}

export interface Ubicacion {
  id: number;
  nombre: string;
  direccion: string;
}

export interface Proveedor {
  id: number;
  nombre: string;
  tipo: string;
}

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewSolicitudService {
  private usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Erik',
      apellido: 'Zerpa',
      cedula: '19985127',
      poliza: 'POL001'
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Gonzalez',
      cedula: '20123456',
      poliza: 'POL002'
    }
  ];

  private ubicaciones: Ubicacion[] = [
    { id: 1, nombre: 'Caracas', direccion: 'Distrito Capital' },
    { id: 2, nombre: 'Valencia', direccion: 'Estado Carabobo' },
    { id: 3, nombre: 'Maracay', direccion: 'Estado Aragua' }
  ];

  private proveedores: Proveedor[] = [
    { id: 1, nombre: 'Servicio Express', tipo: 'Traslado' },
    { id: 2, nombre: 'MediTransport', tipo: 'Ambulancia' },
    { id: 3, nombre: 'AsistMed', tipo: 'Asistencia Médica' }
  ];

  private servicios: Servicio[] = [
    { id: 1, nombre: 'Traslado Simple', descripcion: 'Traslado sin equipamiento médico' },
    { id: 2, nombre: 'Traslado Médico', descripcion: 'Traslado con personal médico' },
    { id: 3, nombre: 'Ambulancia', descripcion: 'Servicio de ambulancia equipada' },
    { id: 4, nombre: 'Asistencia Domiciliaria', descripcion: 'Atención médica a domicilio' }
  ];

  buscarUsuario(cedula: string): Observable<Usuario | undefined> {
    const usuario = this.usuarios.find(u => 
      u.cedula.toLowerCase().includes(cedula.toLowerCase())
    );
    return of(usuario);
  }

  getUbicaciones(): Observable<Ubicacion[]> {
    return of(this.ubicaciones);
  }

  getProveedores(): Observable<Proveedor[]> {
    return of(this.proveedores);
  }

  getServicios(): Observable<Servicio[]> {
    return of(this.servicios);
  }
}