import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Documento {
  id: number;
  nombre: string;
  tipo: string;
  url: string;
}

export interface Solicitud {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  companiaSeguro: string;
  numeroPoliza: string;
  servicioAsociado: string;
  estado: string;
  fechaSolicitud: string;
  documentos: Documento[];
  origen?: string;
  destino?: string;
  proveedor?: string;
  servicios?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchSolicitudesService {
  private solicitudes: Solicitud[] = [
    {
      id: 1,
      nombre: 'Erik',
      apellido: 'Zerpa',
      cedula: '19985127',
      companiaSeguro: 'Seguros Universal',
      numeroPoliza: 'POL001',
      servicioAsociado: 'Seguro de Vida',
      estado: 'Aprobada',
      fechaSolicitud: '2025-03-01',
      origen: 'Caracas',
      destino: 'Valencia',
      proveedor: 'Servicio Express',
      servicios: ['Traslado Simple', 'Asistencia Médica'],
      documentos: [
        { id: 1, nombre: 'Cedula de Identidad', tipo: 'PDF', url: '/docs/cedula.pdf' },
        { id: 2, nombre: 'Informe Medico', tipo: 'PDF', url: '/docs/informe.pdf' }
      ]
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Gonzalez',
      cedula: 'V87654321',
      companiaSeguro: 'Seguros Confianza',
      numeroPoliza: 'POL002',
      servicioAsociado: 'Seguro de Salud',
      estado: 'En Proceso',
      fechaSolicitud: '2025-03-05',
      documentos: [
        { id: 3, nombre: 'Cedula de Identidad', tipo: 'PDF', url: '/docs/cedula2.pdf' },
        { id: 4, nombre: 'Historial Clinico', tipo: 'PDF', url: '/docs/historial.pdf' }
      ]
    }
  ];

  private ubicaciones: string[] = ['Caracas', 'Valencia', 'Maracay', 'Puerto La Cruz'];
  private proveedores: string[] = ['Servicio Express', 'MediTransport', 'AsistMed'];
  private serviciosDisponibles: string[] = [
    'Traslado Simple',
    'Traslado Médico',
    'Ambulancia',
    'Asistencia Médica'
  ];

  buscarSolicitudes(criterio: string): Observable<Solicitud[]> {
    const resultados = this.solicitudes.filter(solicitud => 
      solicitud.cedula.toLowerCase().includes(criterio.toLowerCase()) ||
      solicitud.numeroPoliza.toLowerCase().includes(criterio.toLowerCase())
    );
    return of(resultados);
  }

  obtenerSolicitud(id: number): Observable<Solicitud | undefined> {
    return of(this.solicitudes.find(s => s.id === id));
  }

  actualizarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    const index = this.solicitudes.findIndex(s => s.id === solicitud.id);
    if (index !== -1) {
      this.solicitudes[index] = { ...solicitud };
      return of(this.solicitudes[index]);
    }
    return of(solicitud);
  }

  getUbicaciones(): Observable<string[]> {
    return of(this.ubicaciones);
  }

  getProveedores(): Observable<string[]> {
    return of(this.proveedores);
  }

  getServiciosDisponibles(): Observable<string[]> {
    return of(this.serviciosDisponibles);
  }
}