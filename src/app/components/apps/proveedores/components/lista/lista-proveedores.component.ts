import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../models/proveedor.interface';

@Component({
  selector: 'app-lista-proveedores',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h5>Listado de Proveedores</h5>
                </div>
                <div class="col text-end">
                  <button class="btn btn-primary" (click)="nuevoProveedor()">
                    <i class="fa fa-plus"></i> Nuevo Proveedor
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Cédula</th>
                      <th>Teléfono</th>
                      <th>RIF</th>
                      <th>Tipo de Servicio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let proveedor of proveedores">
                      <td>{{ proveedor.nombre }} {{ proveedor.apellido }}</td>
                      <td>{{ proveedor.cedula }}</td>
                      <td>{{ proveedor.telefono }}</td>
                      <td>{{ proveedor.rif }}</td>
                      <td>{{ proveedor.tipoServicio }}</td>
                      <td>
                        <button class="btn btn-primary btn-sm me-2" (click)="editarProveedor(proveedor.id)">
                          <i class="fa fa-edit"></i> Editar
                        </button>
                        <button class="btn btn-danger btn-sm" (click)="confirmarEliminar(proveedor)">
                          <i class="fa fa-trash"></i> Eliminar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Confirmación -->
    <ng-template #confirmDialog>
      <div mat-dialog-content>
        <h4 class="modal-title">Confirmar Eliminación</h4>
        <p>¿Está seguro que desea eliminar al proveedor {{ proveedorAEliminar?.nombre }} {{ proveedorAEliminar?.apellido }}?</p>
      </div>
      <div mat-dialog-actions align="end">
        <button mat-button (click)="cerrarDialog()">Cancelar</button>
        <button mat-raised-button color="warn" (click)="eliminarProveedor()">Eliminar</button>
      </div>
    </ng-template>
  `,
  styles: []
})
export class ListaProveedoresComponent implements OnInit {
  proveedores: Proveedor[] = [];
  proveedorAEliminar: Proveedor | null = null;
  @ViewChild('confirmDialog') confirmDialog!: TemplateRef<any>;
  dialogRef: MatDialogRef<any> | null = null;

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    this.proveedorService.getProveedores().subscribe(
      proveedores => this.proveedores = proveedores
    );
  }

  nuevoProveedor(): void {
    this.router.navigate(['/proveedores/nuevo']);
  }

  editarProveedor(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/proveedores/editar', id]);
    }
  }

  confirmarEliminar(proveedor: Proveedor): void {
    this.proveedorAEliminar = proveedor;
    this.dialogRef = this.dialog.open(this.confirmDialog, {
      width: '400px'
    });
  }

  cerrarDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  eliminarProveedor(): void {
    if (this.proveedorAEliminar?.id) {
      this.proveedorService.eliminarProveedor(this.proveedorAEliminar.id);
      this.cerrarDialog();
      this.proveedorAEliminar = null;
    }
  }
}