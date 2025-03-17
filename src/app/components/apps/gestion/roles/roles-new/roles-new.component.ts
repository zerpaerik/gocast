import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/sharedmodule';


@Component({
  selector: 'app-roles-new',
  standalone: true,  // Agregar esta línea
  imports: [        // Agregar este array de imports
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './roles-new.component.html',
  styleUrls: ['./roles-new.component.scss']
})
export class RolesNewComponent implements OnInit {
  rolForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  private initForm(): void {
    this.rolForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      // Acceso
      dashboardGeneral: [false],
      serviciosActivos: [false],
      proveedoresMapa: [false],
      // Solicitudes
      consultarSolicitudes: [false],
      agregarSolicitudes: [false],
      editarSolicitudes: [false],
      // Proveedores
      proveedoresAsistencia: [false],
      vehiculosAltaGama: [false],
      tarifarioVial: [false],
      historialTarifas: [false],
      // Usuarios
      usuariosAdmin: [false],
      gestionRoles: [false],
      // Seguros
      companiasSeguros: [false],
      gestionAsegurados: [false],
      // Salud y Mascotas
      gestionPlanesSalud: [false],
      consultasMedicas: [false],
      // Reportes
      reportesFinancieros: [false],
      reportesOperativos: [false],
      reportesSatisfaccion: [false],
      // Configuración General
      ajustesSistema: [false]
    });
  }

  onSubmit(): void {
    if (this.rolForm.valid) {
      // Aquí iría la lógica para guardar el rol
      console.log('Rol a guardar:', this.rolForm.value);
      
      this.toastr.success('Rol creado exitosamente', 'GoCast Admin', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
      
      this.router.navigate(['/apps/gestion/roles']);
    } else {
      this.toastr.error('Por favor complete los campos requeridos', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/apps/gestion/roles']);
  }
}
