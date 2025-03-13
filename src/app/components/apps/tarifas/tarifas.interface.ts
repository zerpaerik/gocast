export interface Tarifa {
    id: number;
    tipoServicio: TipoServicio;
    tipoTarifa: TipoTarifa;
    monto: number;
}

export enum TipoServicio {
    GRUA = 'Grúa',
    CAMBIO_CAUCHO = 'Cambio de Caucho',
    BATERIA = 'Batería',
    COMBUSTIBLE = 'Combustible',
    CERRAJERIA = 'Cerrajería'
}

export enum TipoTarifa {
    FIJA = 'Fija',
    KILOMETRO = 'Por Kilómetro'
}