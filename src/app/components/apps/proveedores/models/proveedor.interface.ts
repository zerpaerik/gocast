export interface ServicioGrua {
  tipo: string;
  modelo: string;
  marca: string;
  capacidad: string;
  servicios: string[];
}

export interface ServicioMoto {
  tipo: string;
  marca: string;
  modelo: string;
  servicios: string[];
}

export interface ServicioBateria {
  tipoVehiculo: string;
  marca: string;
  modelo: string;
  color: string;
  año: number;
}

export type TipoServicio = 'Grua' | 'Moto' | 'Bateria';

export interface Proveedor {
  id?: number;
  nombre: string;
  apellido: string;
  cedula: string;
  telefono: string;
  rif: string;
  tipoServicio: TipoServicio;
  servicioGrua?: ServicioGrua;
  servicioMoto?: ServicioMoto;
  servicioBateria?: ServicioBateria;
}