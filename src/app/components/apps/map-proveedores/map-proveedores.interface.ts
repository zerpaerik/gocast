export interface Proveedor {
    id: number;
    nombre: string;
    telefono: string;
    tipoVehiculo: string;
    lat: number;
    lng: number;
    estado: 'activo' | 'disponible';
    serviciosActivos?: ServicioActivo[];
    iconOptions?: {
        iconUrl: string;
        iconSize: [number, number];
        iconAnchor: [number, number];
        popupAnchor: [number, number];
    };
}

export interface ServicioActivo {
    id: number;
    numeroServicio: string;
    tipoServicio: string;
    cliente: {
        nombre: string;
        telefono: string;
        ubicacion: string;
    };
    fechaInicio: Date;
    estado: string;
}