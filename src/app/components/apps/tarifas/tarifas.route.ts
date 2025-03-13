import { Routes } from '@angular/router';

export const TarifasRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./tarifas.component').then(m => m.TarifasComponent)
    },
    {
        path: 'crear',
        loadComponent: () => import('./tarifas-form.component').then(m => m.TarifasFormComponent)
    },
    {
        path: 'editar/:id',
        loadComponent: () => import('./tarifas-form.component').then(m => m.TarifasFormComponent)
    }
];