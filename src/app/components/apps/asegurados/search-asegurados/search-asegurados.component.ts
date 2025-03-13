import { Component } from '@angular/core';
import { SearchService, Asegurado } from './search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-asegurados',  // Cambiar esto
  templateUrl: './search-asegurados.component.html',
  styleUrls: ['./search-asegurados.component.scss']
})
export class SearchAseguradosComponent {
  searchForm: FormGroup;
  resultados: Asegurado[] = [];
  mensajeBusqueda: string = '';

  constructor(
    private searchService: SearchService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      cedula: [''],
      poliza: ['']
    });
  }

  buscar(): void {
    if (this.searchForm.valid) {
      const { cedula, poliza } = this.searchForm.value;
      this.searchService.buscarAsegurado(cedula, poliza)
        .subscribe(resultados => {
          this.resultados = resultados;
          this.mensajeBusqueda = resultados.length > 0 
            ? `Se encontraron ${resultados.length} resultado(s)`
            : 'No se encontraron resultados';
        });
    }
  }
}