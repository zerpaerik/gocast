import { Component } from '@angular/core';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/forms/form_layouts'
import { SharedModule } from '../../../shared/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { SpkNgSelectComponent } from '../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
  selector: 'app-form-layouts',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent,SpkNgSelectComponent],
  templateUrl: './form-layouts.component.html',
  styleUrl: './form-layouts.component.scss'
})
export class FormLayoutsComponent {
  prismCode = prismCodeData;
  Preference=[
    {label:'Choose...',value:1},
    {label:'One',value:2},
    {label:'Two',value:3},
    {label:'Three',value:4},
  ]
}
