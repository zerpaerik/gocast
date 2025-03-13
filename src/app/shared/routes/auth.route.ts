import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const authen: Routes = [
    { path: '', children: [
        {
            path: '',
            loadChildren: () => import('../../../app/components/authentication/authentication.route').then(r => r.authenticationRoutingModule)
          },
          {
            path: '',
            loadChildren: () => import('../../../app/components/error/error.route').then(r => r.errorRoutingModule)
          },
          
 ] },
 

 
]
@NgModule({
    imports: [RouterModule],
    exports: [RouterModule]
})
export class SaredRoutingModule { }