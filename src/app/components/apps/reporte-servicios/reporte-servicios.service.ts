import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReporteServicio, TipoServicio, EstadoServicio, FiltrosReporte } from './reporte-servicios.interface';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
    providedIn: 'root'
})
export class ReporteServiciosService {
    private datosServicio: ReporteServicio[] = [
        {
            id: 1,
            numeroServicio: 'SRV-001',
            fechaServicio: new Date('2025-03-01'),
            companiaSeguros: 'Seguros Universal',
            tipoServicio: TipoServicio.GRUA,
            cliente: 'Juan Pérez',
            ubicacion: 'Caracas, Venezuela',
            monto: 150.00,
            estado: EstadoServicio.COMPLETADO
        },
        {
            id: 2,
            numeroServicio: 'SRV-002',
            fechaServicio: new Date('2025-03-05'),
            companiaSeguros: 'Seguros Mercantil',
            tipoServicio: TipoServicio.BATERIA,
            cliente: 'María González',
            ubicacion: 'Valencia, Venezuela',
            monto: 75.50,
            estado: EstadoServicio.COMPLETADO
        },
        {
            id: 3,
            numeroServicio: 'SRV-003',
            fechaServicio: new Date('2025-03-08'),
            companiaSeguros: 'Seguros Universal',
            tipoServicio: TipoServicio.NEUMATICO,
            cliente: 'Carlos Rodríguez',
            ubicacion: 'Maracay, Venezuela',
            monto: 45.00,
            estado: EstadoServicio.COMPLETADO
        },
        {
            id: 4,
            numeroServicio: 'SRV-004',
            fechaServicio: new Date('2025-03-10'),
            companiaSeguros: 'Seguros Mercantil',
            tipoServicio: TipoServicio.MECANICA,
            cliente: 'Ana Torres',
            ubicacion: 'Barquisimeto, Venezuela',
            monto: 120.75,
            estado: EstadoServicio.EN_PROCESO
        }
    ];

    getServicios(filtros: FiltrosReporte): Observable<ReporteServicio[]> {
        const serviciosFiltrados = this.datosServicio.filter(servicio => {
            const fechaServicio = new Date(servicio.fechaServicio);
            return (
                servicio.companiaSeguros === filtros.companiaSeguros &&
                fechaServicio >= new Date(filtros.fechaDesde) &&
                fechaServicio <= new Date(filtros.fechaHasta)
            );
        });
        return of(serviciosFiltrados);
    }

    getCompaniasSeguros(): string[] {
        return [...new Set(this.datosServicio.map(s => s.companiaSeguros))];
    }

    exportarCSV(datos: ReporteServicio[]): void {
        const worksheet = XLSX.utils.json_to_sheet(datos.map(servicio => ({
            'Número de Servicio': servicio.numeroServicio,
            'Fecha': new Date(servicio.fechaServicio).toLocaleDateString(),
            'Compañía de Seguros': servicio.companiaSeguros,
            'Tipo de Servicio': servicio.tipoServicio,
            'Cliente': servicio.cliente,
            'Ubicación': servicio.ubicacion,
            'Monto': servicio.monto.toLocaleString('es-VE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }),
            'Estado': servicio.estado
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte de Servicios');
        XLSX.writeFile(workbook, `reporte_servicios_${new Date().toISOString().split('T')[0]}.xlsx`);
    }

    exportarPDF(datos: ReporteServicio[]): void {
        try {
            const doc = new jsPDF();
            let pageNumber = 1;
            
            // Configuración de la página
            doc.setFontSize(16);
            doc.text('Reporte de Servicios Viales', 14, 20);
            
            // Información del reporte
            doc.setFontSize(10);
            const fechaGeneracion = new Date().toLocaleDateString('es-VE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            doc.text(`Fecha de generación: ${fechaGeneracion}`, 14, 30);

            // Preparar datos para la tabla
            const tableRows = datos.map(servicio => [
                servicio.numeroServicio,
                new Date(servicio.fechaServicio).toLocaleDateString(),
                servicio.companiaSeguros,
                servicio.tipoServicio,
                servicio.cliente,
                servicio.monto.toLocaleString('es-VE', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }),
                servicio.estado
            ]);

            // Generar tabla
            autoTable(doc, {
                startY: 40,
                head: [['N° Servicio', 'Fecha', 'Compañía', 'Tipo', 'Cliente', 'Monto', 'Estado']],
                body: tableRows,
                theme: 'grid',
                headStyles: {
                    fillColor: [41, 128, 185],
                    textColor: 255,
                    fontSize: 10,
                    halign: 'center'
                },
                styles: {
                    fontSize: 9,
                    cellPadding: 3,
                    overflow: 'linebreak'
                },
                columnStyles: {
                    0: { cellWidth: 25 },
                    1: { cellWidth: 25 },
                    2: { cellWidth: 35 },
                    3: { cellWidth: 25 },
                    4: { cellWidth: 35 },
                    5: { cellWidth: 25, halign: 'right' },
                    6: { cellWidth: 20, halign: 'center' }
                },
                margin: { top: 40 },
                didDrawPage: function(data) {
                    // Agregar pie de página en cada página
                    doc.setFontSize(8);
                    const pageSize = doc.internal.pageSize;
                    const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                    doc.text(`Página ${pageNumber}`, data.settings.margin.left, pageHeight - 10);
                    pageNumber++;
                }
            });

            doc.save(`reporte_servicios_${new Date().toISOString().split('T')[0]}.pdf`);
        } catch (error) {
            console.error('Error al generar PDF:', error);
            throw new Error('Error al generar el PDF');
        }
    }
}