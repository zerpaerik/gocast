import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchAseguradosComponent } from './search-asegurados.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchAseguradosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  exports: [SearchAseguradosComponent]
})
export class SearchAseguradosModule { }