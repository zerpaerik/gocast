import { Component, ViewChild, ElementRef } from '@angular/core';
import { Papa } from 'ngx-papaparse';

interface Asegurado {
  nombre: string;
  apellido: string;
  cedula: string;
  poliza: string;
}

@Component({
  selector: 'app-upload-asegurados',
  templateUrl: './upload-asegurados.component.html'
})
export class UploadAseguradosComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  asegurados: Asegurado[] = [];
  archivoSeleccionado: File | null = null;
  dataCargada = false;

  constructor(private papa: Papa) {}

  onFileSelected(event: any): void {
    const files = event.target.files as FileList;
    if (files.length > 0) {
      this.archivoSeleccionado = files[0];
      this.procesarArchivo();
    }
  }

  procesarArchivo(): void {
    if (!this.archivoSeleccionado) return;
    
    this.papa.parse(this.archivoSeleccionado, {
      complete: (result) => {
        this.asegurados = result.data
          .filter((row: any[]) => row.length >= 4)
          .map((row: any[]) => ({
            nombre: row[0]?.trim() || '',
            apellido: row[1]?.trim() || '',
            cedula: row[2]?.trim() || '',
            poliza: row[3]?.trim() || ''
          }))
          .filter((asegurado: Asegurado) => 
            asegurado.nombre && 
            asegurado.apellido && 
            asegurado.cedula && 
            asegurado.poliza
          );
        this.dataCargada = this.asegurados.length > 0;
      },
      header: false,
      skipEmptyLines: true
    });
  }

  guardarDatos(): void {
    if (this.asegurados.length === 0) return;
    console.log('Datos a guardar:', this.asegurados);
    // Aquí se implementará la lógica para guardar en la base de datos
  }

  limpiarDatos(): void {
    this.asegurados = [];
    this.dataCargada = false;
    this.archivoSeleccionado = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }
}