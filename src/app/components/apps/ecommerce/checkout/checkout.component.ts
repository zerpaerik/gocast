import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/sharedmodule';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule,SharedModule,AsyncPipe,ReactiveFormsModule,FormsModule,NgSelectModule,MaterialModuleModule],
  templateUrl: './checkout.component.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder,private modalService: NgbModal) {
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  this.thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
 this.fourthFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  }

  Address(content: any) {
    this.modalService.open(content,{ size: 'lg' });

  }
}
