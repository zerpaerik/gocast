import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {

}
