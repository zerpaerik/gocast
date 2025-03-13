export interface Servicio {
    id: number;
    fechaHora: Date;
    tipoServicio: string;
    proveedor: string;
    asegurado: string;
    estado: 'activo' | 'completado' | 'cancelado';
    detalles?: string;
    serviciosAdicionales?: string[];
}
