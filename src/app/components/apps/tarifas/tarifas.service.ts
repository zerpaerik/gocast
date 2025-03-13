import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarifa, TipoServicio, TipoTarifa } from './tarifas.interface';

@Injectable({
    providedIn: 'root'
})
export class TarifasService {
    private tarifas: Tarifa[] = [
        { id: 1, tipoServicio: TipoServicio.GRUA, tipoTarifa: TipoTarifa.KILOMETRO, monto: 2.5 },
        { id: 2, tipoServicio: TipoServicio.CAMBIO_CAUCHO, tipoTarifa: TipoTarifa.FIJA, monto: 25 },
        { id: 3, tipoServicio: TipoServicio.BATERIA, tipoTarifa: TipoTarifa.FIJA, monto: 35 },
        { id: 4, tipoServicio: TipoServicio.COMBUSTIBLE, tipoTarifa: TipoTarifa.FIJA, monto: 20 },
        { id: 5, tipoServicio: TipoServicio.CERRAJERIA, tipoTarifa: TipoTarifa.FIJA, monto: 45 }
    ];

    getTarifas(): Observable<Tarifa[]> {
        return of(this.tarifas);
    }

    getTarifa(id: number): Observable<Tarifa | undefined> {
        return of(this.tarifas.find(t => t.id === id));
    }

    crearTarifa(tarifa: Omit<Tarifa, 'id'>): Observable<Tarifa> {
        const newTarifa = {
            ...tarifa,
            id: Math.max(...this.tarifas.map(t => t.id)) + 1
        };
        this.tarifas.push(newTarifa);
        return of(newTarifa);
    }

    actualizarTarifa(tarifa: Tarifa): Observable<Tarifa> {
        const index = this.tarifas.findIndex(t => t.id === tarifa.id);
        if (index !== -1) {
            this.tarifas[index] = tarifa;
        }
        return of(tarifa);
    }

    eliminarTarifa(id: number): Observable<boolean> {
        const index = this.tarifas.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tarifas.splice(index, 1);
            return of(true);
        }
        return of(false);
    }
}