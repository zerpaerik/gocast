import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DetalleFinanciero, FiltrosReporteFinanciero } from './reporte-financiero.interface';
import * as XLSX from 'xlsx';

@Injectable({
    providedIn: 'root'
})
export class ReporteFinancieroService {
    private datosFinancieros: DetalleFinanciero[] = [
        {
            id: 1,
            numeroServicio: 'SRV-001',
            fechaServicio: new Date('2025-03-01'),
            tipoServicio: 'Grúa',
            cliente: 'Juan Pérez',
            ubicacion: 'Caracas, Venezuela',
            ingresos: 250.00,
            gastos: 100.00,
            detalleGastos: 'Combustible: 50.00, Peajes: 30.00, Viáticos: 20.00',
            utilidad: 150.00
        },
        {
            id: 2,
            numeroServicio: 'SRV-002',
            fechaServicio: new Date('2025-03-05'),
            tipoServicio: 'Mecánica',
            cliente: 'María González',
            ubicacion: 'Valencia, Venezuela',
            ingresos: 180.00,
            gastos: 75.00,
            detalleGastos: 'Repuestos: 50.00, Mano de obra: 25.00',
            utilidad: 105.00
        },
        {
            id: 3,
            numeroServicio: 'SRV-003',
            fechaServicio: new Date('2025-03-08'),
            tipoServicio: 'Batería',
            cliente: 'Carlos Rodríguez',
            ubicacion: 'Maracay, Venezuela',
            ingresos: 120.00,
            gastos: 60.00,
            detalleGastos: 'Batería: 45.00, Transporte: 15.00',
            utilidad: 60.00
        }
    ];

    getReporteFinanciero(filtros: FiltrosReporteFinanciero): Observable<DetalleFinanciero[]> {
        const resultadosFiltrados = this.datosFinancieros.filter(dato => {
            const fechaServicio = new Date(dato.fechaServicio);
            return fechaServicio >= new Date(filtros.fechaDesde) &&
                   fechaServicio <= new Date(filtros.fechaHasta);
        });
        return of(resultadosFiltrados);
    }

    exportarCSV(datos: DetalleFinanciero[]): void {
        const worksheet = XLSX.utils.json_to_sheet(datos.map(dato => ({
            'Número de Servicio': dato.numeroServicio,
            'Fecha': new Date(dato.fechaServicio).toLocaleDateString(),
            'Tipo de Servicio': dato.tipoServicio,
            'Cliente': dato.cliente,
            'Ubicación': dato.ubicacion,
            'Ingresos': dato.ingresos.toLocaleString('es-VE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }),
            'Gastos': dato.gastos.toLocaleString('es-VE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }),
            'Detalle de Gastos': dato.detalleGastos,
            'Utilidad': dato.utilidad.toLocaleString('es-VE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte Financiero');
        XLSX.writeFile(workbook, `reporte_financiero_${new Date().toISOString().split('T')[0]}.xlsx`);
    }
}