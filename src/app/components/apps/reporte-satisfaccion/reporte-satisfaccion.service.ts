import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DetalleSatisfaccion, FiltrosReporteSatisfaccion, ServicioCalificado } from './reporte-satisfaccion.interface';
import * as XLSX from 'xlsx';

@Injectable({
    providedIn: 'root'
})
export class ReporteSatisfaccionService {
    private serviciosCalificados: ServicioCalificado[] = [
        {
            id: 1,
            numeroServicio: 'SRV-001',
            fechaServicio: new Date('2025-03-01'),
            tipoServicio: 'Grúa',
            cliente: 'Juan Pérez',
            calificacion: 5,
            comentario: 'Excelente servicio, muy rápido'
        },
        {
            id: 2,
            numeroServicio: 'SRV-002',
            fechaServicio: new Date('2025-03-02'),
            tipoServicio: 'Grúa',
            cliente: 'María González',
            calificacion: 4,
            comentario: 'Buen servicio, un poco demorado'
        },
        {
            id: 3,
            numeroServicio: 'SRV-003',
            fechaServicio: new Date('2025-03-03'),
            tipoServicio: 'Mecánica',
            cliente: 'Carlos Rodríguez',
            calificacion: 5,
            comentario: 'Muy profesionales'
        },
        {
            id: 4,
            numeroServicio: 'SRV-004',
            fechaServicio: new Date('2025-03-04'),
            tipoServicio: 'Batería',
            cliente: 'Ana Torres',
            calificacion: 3,
            comentario: 'Servicio regular, mucho tiempo de espera'
        },
        {
            id: 5,
            numeroServicio: 'SRV-005',
            fechaServicio: new Date('2025-03-05'),
            tipoServicio: 'Mecánica',
            cliente: 'Pedro Ramírez',
            calificacion: 4,
            comentario: 'Buen servicio técnico'
        }
    ];

    getTiposServicio(): string[] {
        return [...new Set(this.serviciosCalificados.map(s => s.tipoServicio))];
    }

    getReporteSatisfaccion(filtros: FiltrosReporteSatisfaccion): Observable<DetalleSatisfaccion[]> {
        const serviciosFiltrados = this.serviciosCalificados.filter(servicio => {
            const fechaServicio = new Date(servicio.fechaServicio);
            const cumpleFecha = fechaServicio >= new Date(filtros.fechaDesde) &&
                               fechaServicio <= new Date(filtros.fechaHasta);
            const cumpleTipo = !filtros.tipoServicio || servicio.tipoServicio === filtros.tipoServicio;
            return cumpleFecha && cumpleTipo;
        });

        const serviciosPorTipo = serviciosFiltrados.reduce((acc, servicio) => {
            if (!acc[servicio.tipoServicio]) {
                acc[servicio.tipoServicio] = [];
            }
            acc[servicio.tipoServicio].push(servicio);
            return acc;
        }, {} as { [key: string]: ServicioCalificado[] });

        const resultados: DetalleSatisfaccion[] = Object.entries(serviciosPorTipo).map(([tipo, servicios]) => {
            const calificaciones = servicios.map(s => s.calificacion);
            return {
                tipoServicio: tipo,
                calificacionPromedio: this.calcularPromedio(calificaciones),
                calificacionMinima: Math.min(...calificaciones),
                calificacionMaxima: Math.max(...calificaciones),
                totalServicios: servicios.length,
                periodoDesde: filtros.fechaDesde,
                periodoHasta: filtros.fechaHasta
            };
        });

        return of(resultados);
    }

    private calcularPromedio(numeros: number[]): number {
        return numeros.reduce((a, b) => a + b, 0) / numeros.length;
    }

    exportarCSV(datos: DetalleSatisfaccion[]): void {
        const worksheet = XLSX.utils.json_to_sheet(datos.map(dato => ({
            'Tipo de Servicio': dato.tipoServicio,
            'Periodo Desde': new Date(dato.periodoDesde).toLocaleDateString(),
            'Periodo Hasta': new Date(dato.periodoHasta).toLocaleDateString(),
            'Calificación Promedio': dato.calificacionPromedio.toFixed(2),
            'Calificación Mínima': dato.calificacionMinima,
            'Calificación Máxima': dato.calificacionMaxima,
            'Total Servicios': dato.totalServicios
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte de Satisfacción');
        XLSX.writeFile(workbook, `reporte_satisfaccion_${new Date().toISOString().split('T')[0]}.xlsx`);
    }
}