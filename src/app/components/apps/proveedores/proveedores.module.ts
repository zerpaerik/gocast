import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ListaProveedoresComponent } from './components/lista/lista-proveedores.component';
import { FormularioProveedorComponent } from './components/formulario/formulario-proveedor.component';

@NgModule({
  declarations: [
    ListaProveedoresComponent,
    FormularioProveedorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProveedoresRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule
  ],
  providers: []
})
export class ProveedoresModule { }