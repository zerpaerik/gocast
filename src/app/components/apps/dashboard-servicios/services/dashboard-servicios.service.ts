import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Servicio } from '../models/servicio.interface';

@Injectable({
    providedIn: 'root'
})
export class DashboardServiciosService {
    private serviciosMock: Servicio[] = [
        {
            id: 1,
            fechaHora: new Date(),
            tipoServicio: 'Consulta Médica',
            proveedor: 'Clínica Santa María',
            asegurado: 'Juan Pérez',
            estado: 'activo'
        },
        {
            id: 2,
            fechaHora: new Date(),
            tipoServicio: 'Grua',
            proveedor: 'Grua Express',
            asegurado: 'María González',
            estado: 'activo'
        },
        {
            id: 3,
            fechaHora: new Date(),
            tipoServicio: 'Rayos X',
            proveedor: 'Centro Diagnóstico',
            asegurado: 'Pedro Ramírez',
            estado: 'activo'
        },
        {
            id: 4,
            fechaHora: new Date(),
            tipoServicio: 'Cambio de caucho',
            proveedor: 'Cauchera Express XX',
            asegurado: 'Ana Torres',
            estado: 'activo'
        },
        {
            id: 5,
            fechaHora: new Date(),
            tipoServicio: 'Odontología',
            proveedor: 'Dental Care',
            asegurado: 'Carlos López',
            estado: 'activo'
        },
        {
            id: 6,
            fechaHora: new Date(),
            tipoServicio: 'Oftalmología',
            proveedor: 'Vision Center',
            asegurado: 'Laura Martínez',
            estado: 'activo'
        },
        {
            id: 7,
            fechaHora: new Date(),
            tipoServicio: 'Cardiología',
            proveedor: 'Heart Center',
            asegurado: 'Roberto Díaz',
            estado: 'activo'
        },
        {
            id: 8,
            fechaHora: new Date(),
            tipoServicio: 'Pediatría',
            proveedor: 'Kids Health',
            asegurado: 'María José',
            estado: 'activo'
        },
        {
            id: 9,
            fechaHora: new Date(),
            tipoServicio: 'Traumatología',
            proveedor: 'Trauma Center',
            asegurado: 'José García',
            estado: 'activo'
        },
        {
            id: 10,
            fechaHora: new Date(),
            tipoServicio: 'Neurología',
            proveedor: 'Neuro Care',
            asegurado: 'Carmen Rodríguez',
            estado: 'activo'
        }
    ];

    getServiciosActivos(): Observable<Servicio[]> {
        return of(this.serviciosMock.filter(s => s.estado === 'activo'));
    }

    getServicioById(id: number): Observable<Servicio | undefined> {
        return of(this.serviciosMock.find(s => s.id === id));
    }

    actualizarServicio(servicio: Servicio): Observable<boolean> {
        const index = this.serviciosMock.findIndex(s => s.id === servicio.id);
        if (index !== -1) {
            this.serviciosMock[index] = servicio;
            return of(true);
        }
        return of(false);
    }
}