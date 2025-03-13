import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchSolicitudesComponent } from './search-solicitudes.component';
import { SearchSolicitudesService } from './search-solicitudes.service';

@NgModule({
  declarations: [
    SearchSolicitudesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [SearchSolicitudesService],
  exports: [SearchSolicitudesComponent]
})
export class SearchSolicitudesModule { }