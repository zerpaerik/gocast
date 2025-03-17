import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/sharedmodule';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    SpkReusableTablesComponent
  ],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  borderColumn = [
    { header: "Nombre de rol", field: "rol" },         
    { header: "Estatus", field: "status" },
    { header: "Acciones", field: "action" }
  ];
  
  borderTables = [
    { rol: "Administrador", status: "Active" },
    { rol: "Gestor", status: "Active" }
  ];

  constructor(private router: Router) {}

  crearNuevoRol() {
    this.router.navigate(['/apps/gestion/roles/nuevo']);
  }
}
