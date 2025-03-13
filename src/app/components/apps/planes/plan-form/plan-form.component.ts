import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanesService, Plan } from '../planes.service';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html'
})
export class PlanFormComponent implements OnInit {
  planForm: FormGroup;
  modoEdicion = false;
  planId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private planesService: PlanesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.planForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      usosMensuales: ['', [Validators.required, Validators.min(1), Validators.max(31)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.modoEdicion = true;
      this.planId = +id;
      this.cargarPlan(this.planId);
    }
  }

  cargarPlan(id: number): void {
    this.planesService.getPlanById(id).subscribe(plan => {
      if (plan) {
        this.planForm.patchValue({
          nombre: plan.nombre,
          descripcion: plan.descripcion,
          usosMensuales: plan.usosMensuales
        });
      }
    });
  }

  guardar(): void {
    if (this.planForm.valid) {
      if (this.modoEdicion && this.planId) {
        const planActualizado: Plan = {
          id: this.planId,
          ...this.planForm.value,
          activo: true
        };
        this.planesService.actualizarPlan(planActualizado).subscribe(() => {
          this.router.navigate(['/apps/planes']);
        });
      } else {
        this.planesService.crearPlan(this.planForm.value).subscribe(() => {
          this.router.navigate(['/apps/planes']);
        });
      }
    }
  }

  cancelar(): void {
    this.router.navigate(['/apps/planes']);
  }
}