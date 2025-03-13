import { Component, Renderer2 } from '@angular/core';
import { ShowcodeCardComponent } from '../../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/prismData/forms/validations'
import { SharedModule } from '../../../../shared/sharedmodule';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';



@Component({
  selector: 'new-seguro',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent, SpkNgSelectComponent],
  templateUrl: './seguros-new.component.html',
  styleUrl: './seguros-new.component.scss'
})
export class SegurosNewComponent {
  prismCode = prismCodeData;



  constructor(
    
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private toastr: ToastrService 
  ) {


  }

  ngOnInit(): void {
   
;
  }

  cityOptions = [
    { label: 'Buscar', value: '' },
    { label: 'Asistencia Vial', value: 'London' },
    { label: 'Salud', value: 'Manchester' },
    { label: 'Animales', value: 'Liverpool' },
    { label: 'Otros', value: 'Liverpool' },

  ];

  handleSelectChange(value: any | any[]) {
  }

 





  //angular
  public newFunForm!: FormGroup;
  public error: any = '';
  
  get form() {
    return this.newFunForm.controls;
  }


  Submit() {
      console.log('llego al formulario');
      console.log(this.newFunForm)
      this.router.navigate(['/apps/gestion/funcionalidades']);
      this.toastr.success('Registro exitoso','GoCast Admin', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
  
  
  }

}
