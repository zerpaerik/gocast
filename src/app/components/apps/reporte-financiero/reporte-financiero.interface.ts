export interface FiltrosReporteFinanciero {
    fechaDesde: Date;
    fechaHasta: Date;
}

export interface DetalleFinanciero {
    id: number;
    numeroServicio: string;
    fechaServicio: Date;
    tipoServicio: string;
    cliente: string;
    ubicacion: string;
    ingresos: number;
    gastos: number;
    detalleGastos: string;
    utilidad: number;
}