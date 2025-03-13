import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapProveedoresService } from './map-proveedores.service';
import { Proveedor } from './map-proveedores.interface';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import * as L from 'leaflet';

@Component({
    selector: 'app-map-proveedores',
    templateUrl: './map-proveedores.component.html',
    standalone: true,
    imports: [
        CommonModule,
        NgbModalModule
    ],
    providers: [MapProveedoresService]
})
export class MapProveedoresComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('proveedorModal') proveedorModal!: TemplateRef<any>;
    
    private map?: L.Map;
    private markers: L.Marker[] = [];
    proveedores: Proveedor[] = [];
    selectedProveedor?: Proveedor;

    // Centro inicial del mapa (Caracas)
    private center: L.LatLngExpression = [10.491016, -66.902061];

    constructor(
        private mapProveedoresService: MapProveedoresService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.loadProveedores();
    }

    ngAfterViewInit(): void {
        if (!this.map) {
            this.initMap();
        }
    }

    ngOnDestroy(): void {
        if (this.map) {
            this.map.remove();
            this.map = undefined;
        }
    }

    private initMap(): void {
        const container = L.DomUtil.get('map');
        
        if (container != null) {
            // @ts-ignore - El tipo es compatible pero TypeScript no lo reconoce correctamente
            container._leaflet_id = null;
        }

        this.map = L.map('map').setView(this.center, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ' OpenStreetMap contributors'
        }).addTo(this.map);

        if (this.proveedores.length > 0) {
            this.addMarkers();
        }
    }

    private loadProveedores(): void {
        this.mapProveedoresService.getProveedores().subscribe(proveedores => {
            this.proveedores = proveedores;
            if (this.map) {
                this.addMarkers();
            }
        });
    }

    private addMarkers(): void {
        if (!this.map) return;

        // Limpiar marcadores existentes
        this.markers.forEach(marker => marker.remove());
        this.markers = [];

        this.proveedores.forEach(proveedor => {
            const icon = L.icon({
                ...proveedor.iconOptions!
            });

            const marker = L.marker([proveedor.lat, proveedor.lng], { icon });
            marker.on('click', () => {
                this.onMarkerClick(proveedor);
            });
            marker.addTo(this.map!);
            this.markers.push(marker);
        });
    }

    onMarkerClick(proveedor: Proveedor): void {
        this.selectedProveedor = proveedor;
        this.modalService.open(this.proveedorModal, { 
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }
}