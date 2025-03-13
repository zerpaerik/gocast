import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanesComponent } from './planes.component';
import { PlanFormComponent } from './plan-form/plan-form.component';

@NgModule({
  declarations: [
    PlanesComponent,
    PlanFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PlanesModule { }