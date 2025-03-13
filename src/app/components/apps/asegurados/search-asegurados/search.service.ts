import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Asegurado {
  id: number;
  nombre: string;
  cedula: string;
  poliza: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private asegurados: Asegurado[] = [
    { id: 1, nombre: 'Juan Pérez', cedula: 'V12345678', poliza: 'POL001', estado: 'Activo' },
    { id: 2, nombre: 'María González', cedula: 'V87654321', poliza: 'POL002', estado: 'Activo' },
    { id: 3, nombre: 'Carlos Rodríguez', cedula: 'V23456789', poliza: 'POL003', estado: 'Inactivo' },
    { id: 4, nombre: 'Ana López', cedula: 'V34567890', poliza: 'POL004', estado: 'Activo' }
  ];

  buscarAsegurado(cedula: string, poliza: string): Observable<Asegurado[]> {
    const resultados = this.asegurados.filter(asegurado => 
      asegurado.cedula.toLowerCase().includes(cedula.toLowerCase()) &&
      asegurado.poliza.toLowerCase().includes(poliza.toLowerCase())
    );
    return of(resultados);
  }
}