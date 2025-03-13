import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    children: [
      {path:'', loadChildren : () => import('../../../app/components/dashboards/dashboards.routes').then(r => r.dashboardRoutingModule)},
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/apps.route').then(r => r.appsRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/pages/pages.route').then(r => r.pagesRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/uielements/uielements.routes').then(r => r.uielementsRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/advancedui/advancedui.routes').then(r => r.advanceduiRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/utilities/utilities.route').then(r => r.utilitiesRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/charts/charts.route').then(r => r.chartsRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/map/map.route').then(r => r.mapRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/tables/tables.route').then(r => r.tablesRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/icons/icons.route').then(r => r.iconsRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/widgets/widgets.route').then(r => r.widgetsRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/forms/forms.route').then(r => r.formsRoutingModule)
      }
      ,
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/gestion/funcionalidades.route').then(r => r.funcionalidadesRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/gestion/roles.route').then(r => r.rolesRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/vehiculos/vehiculos.route').then(r => r.vehiculosRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/seguros/seguros.route').then(r => r.segurosRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/asegurados/asegurados.route').then(r => r.aseguradosRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/solicitudes/solicitudes.route').then(r => r.solicitudesRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/planes/planes.route').then(r => r.planesRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/apps/tarifario/tarifarios.route').then(r => r.TarifariosRoutingModule)
      },
      {
        path: 'reporte-servicios',
        loadChildren: () => import('../../../app/components/apps/reporte-servicios/reporte-servicios.route').then(r => r.ReporteServiciosRoutingModule)
      },
      {
        path: 'dashboard-servicios',
        loadChildren: () => import('../../../app/components/apps/dashboard-servicios/dashboard-servicios.module').then(m => m.DashboardServiciosModule)
    }
   
    ],
  },
];
@NgModule({
  // imports: [RouterModule.forRoot(admin)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
