import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TarifariosComponent } from './tarifarios.component';
import { TarifarioFormComponent } from './tarifario-form.component';

@NgModule({
  declarations: [
    TarifariosComponent,
    TarifarioFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TarifariosModule { }