export interface ReporteServicio {
    id: number;
    numeroServicio: string;
    fechaServicio: Date;
    companiaSeguros: string;
    tipoServicio: TipoServicio;
    cliente: string;
    ubicacion: string;
    monto: number;
    estado: EstadoServicio;
}

export enum TipoServicio {
    GRUA = 'Grúa',
    BATERIA = 'Batería',
    COMBUSTIBLE = 'Combustible',
    NEUMATICO = 'Neumático',
    MECANICA = 'Mecánica Ligera'
}

export enum EstadoServicio {
    COMPLETADO = 'Completado',
    CANCELADO = 'Cancelado',
    EN_PROCESO = 'En Proceso'
}

export interface FiltrosReporte {
    companiaSeguros: string;
    fechaDesde: Date;
    fechaHasta: Date;
}

export interface ExportOptions {
    filename?: string;
    format: 'pdf' | 'excel';
}

export interface TableConfig {
    columns: TableColumn[];
    styles?: {
        header?: {
            fillColor?: number[];
            textColor?: number;
            fontSize?: number;
            halign?: 'left' | 'center' | 'right';
        };
        body?: {
            fontSize?: number;
            cellPadding?: number;
        };
    };
}

export interface TableColumn {
    header: string;
    field: keyof ReporteServicio;
    width?: number;
    align?: 'left' | 'center' | 'right';
}