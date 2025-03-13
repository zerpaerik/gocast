export interface FiltrosReporteSatisfaccion {
    fechaDesde: Date;
    fechaHasta: Date;
    tipoServicio?: string;
}

export interface DetalleSatisfaccion {
    tipoServicio: string;
    calificacionPromedio: number;
    calificacionMinima: number;
    calificacionMaxima: number;
    totalServicios: number;
    periodoDesde: Date;
    periodoHasta: Date;
}

export interface ServicioCalificado {
    id: number;
    numeroServicio: string;
    fechaServicio: Date;
    tipoServicio: string;
    cliente: string;
    calificacion: number;
    comentario: string;
}