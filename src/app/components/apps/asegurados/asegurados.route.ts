import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAseguradosComponent } from './search-asegurados/search-asegurados.component';
import { UploadAseguradosComponent } from './upload-asegurados/upload-asegurados.component';
import { SearchAseguradosModule } from './search-asegurados/search-asegurados.module';
import { UploadAseguradosModule } from './upload-asegurados/upload-asegurados.module';
import { AseguradosNewComponent } from './new-asegurados/new-asegurados.component';

export const admin: Routes = [
  {
    path: 'apps/asegurados',
    children: [
      {
        path: 'search-asegurados',
        component: SearchAseguradosComponent,
      },
      {
        path: 'upload-asegurados',
        component: UploadAseguradosComponent,
      },
      {
        path: 'new-asegurado',
        component: AseguradosNewComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(admin),
    SearchAseguradosModule,
    UploadAseguradosModule,
    AseguradosNewComponent
  ],
  exports: [RouterModule]
})
export class aseguradosRoutingModule { }