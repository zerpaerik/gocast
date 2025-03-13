import { Component } from '@angular/core';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/forms/validations'
import { SharedModule } from '../../../shared/sharedmodule';
@Component({
  selector: 'app-validations',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss'
})
export class ValidationsComponent {
  prismCode = prismCodeData;

}
