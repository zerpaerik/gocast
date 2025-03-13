import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';

@Component({
  selector: 'app-helpers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './helpers.component.html',
  styleUrl: './helpers.component.scss'
})
export class HelpersComponent {

}
