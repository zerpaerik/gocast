import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProveedoresComponent } from './components/lista/lista-proveedores.component';
import { FormularioProveedorComponent } from './components/formulario/formulario-proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProveedoresComponent
  },
  {
    path: 'nuevo',
    component: FormularioProveedorComponent
  },
  {
    path: 'editar/:id',
    component: FormularioProveedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }