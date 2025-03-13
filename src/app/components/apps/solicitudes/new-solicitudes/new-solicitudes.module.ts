import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewSolicitudComponent } from './new-solicitudes.component';
import { NewSolicitudService } from './new-solicitudes.service';

@NgModule({
  declarations: [
    NewSolicitudComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [NewSolicitudService],
  exports: [NewSolicitudComponent]
})
export class NewSolicitudModule { }