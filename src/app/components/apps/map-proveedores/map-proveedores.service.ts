import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proveedor } from './map-proveedores.interface';

@Injectable({
    providedIn: 'root'
})
export class MapProveedoresService {
    private proveedores: Proveedor[] = [
        {
            id: 1,
            nombre: 'Juan Pérez',
            telefono: '+58 414-555-1234',
            tipoVehiculo: 'Grúa Plataforma',
            lat: 10.491016,
            lng: -66.902061,
            estado: 'activo',
            iconOptions: {
                iconUrl: 'assets/images/marker-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            },
            serviciosActivos: [
                {
                    id: 1,
                    numeroServicio: 'SRV-001',
                    tipoServicio: 'Remolque',
                    cliente: {
                        nombre: 'María González',
                        telefono: '+58 424-555-9876',
                        ubicacion: 'Av. Francisco de Miranda, Los Palos Grandes, Caracas'
                    },
                    fechaInicio: new Date(),
                    estado: 'En Proceso'
                },
                {
                    id: 2,
                    numeroServicio: 'SRV-002',
                    tipoServicio: 'Asistencia Mecánica',
                    cliente: {
                        nombre: 'Luis Rodríguez',
                        telefono: '+58 412-555-4567',
                        ubicacion: 'Centro Comercial Sambil, Chacao, Caracas'
                    },
                    fechaInicio: new Date(),
                    estado: 'Pendiente'
                }
            ]
        },
        {
            id: 2,
            nombre: 'Carlos Rodríguez',
            telefono: '+58 412-555-5678',
            tipoVehiculo: 'Grúa de Arrastre',
            lat: 10.506098,
            lng: -66.915492,
            estado: 'activo',
            iconOptions: {
                iconUrl: 'assets/images/marker-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            },
            serviciosActivos: [
                {
                    id: 3,
                    numeroServicio: 'SRV-003',
                    tipoServicio: 'Asistencia Mecánica',
                    cliente: {
                        nombre: 'Pedro Martínez',
                        telefono: '+58 416-555-4321',
                        ubicacion: 'Las Mercedes, Torre Empresarial, Caracas'
                    },
                    fechaInicio: new Date(),
                    estado: 'En Ruta'
                }
            ]
        },
        {
            id: 3,
            nombre: 'Ana Torres',
            telefono: '+58 424-555-9012',
            tipoVehiculo: 'Unidad Mecánica',
            lat: 10.491433,
            lng: -66.884121,
            estado: 'disponible',
            iconOptions: {
                iconUrl: 'assets/images/marker-blue.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            }
        },
        {
            id: 4,
            nombre: 'Luis Ramírez',
            telefono: '+58 414-555-3456',
            tipoVehiculo: 'Grúa Plataforma',
            lat: 10.469857,
            lng: -66.893133,
            estado: 'activo',
            iconOptions: {
                iconUrl: 'assets/images/marker-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            },
            serviciosActivos: [
                {
                    id: 4,
                    numeroServicio: 'SRV-004',
                    tipoServicio: 'Remolque',
                    cliente: {
                        nombre: 'Carmen Díaz',
                        telefono: '+58 412-555-8765',
                        ubicacion: 'El Rosal, Centro Plaza, Caracas'
                    },
                    fechaInicio: new Date(),
                    estado: 'En Proceso'
                },
                {
                    id: 5,
                    numeroServicio: 'SRV-005',
                    tipoServicio: 'Batería Descargada',
                    cliente: {
                        nombre: 'José Blanco',
                        telefono: '+58 416-555-9999',
                        ubicacion: 'La Castellana, Edificio Torre La Primera, Caracas'
                    },
                    fechaInicio: new Date(),
                    estado: 'Pendiente'
                }
            ]
        },
        {
            id: 5,
            nombre: 'María Fernández',
            telefono: '+58 416-555-7890',
            tipoVehiculo: 'Unidad Mecánica',
            lat: 10.506098,
            lng: -66.893133,
            estado: 'disponible',
            iconOptions: {
                iconUrl: 'assets/images/marker-blue.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            }
        },
        {
            id: 6,
            nombre: 'Roberto Mendoza',
            telefono: '+58 424-555-2468',
            tipoVehiculo: 'Grúa Plataforma',
            lat: 10.495678,
            lng: -66.899876,
            estado: 'activo',
            iconOptions: {
                iconUrl: 'assets/images/marker-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            },
            serviciosActivos: [
                {
                    id: 6,
                    numeroServicio: 'SRV-006',
                    tipoServicio: 'Cambio de Cauchos',
                    cliente: {
                        nombre: 'Diana López',
                        telefono: '+58 414-555-1357',
                        ubicacion: 'Altamira, Centro Comercial San Ignacio, Caracas'
                    },
                    fechaInicio: new Date(),
                    estado: 'En Proceso'
                }
            ]
        }
    ];

    getProveedores(): Observable<Proveedor[]> {
        return of(this.proveedores);
    }

    getProveedor(id: number): Observable<Proveedor | undefined> {
        return of(this.proveedores.find(p => p.id === id));
    }
}