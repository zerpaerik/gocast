import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-school',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-school.component.html',
  styleUrl: './spk-school.component.scss'
})
export class SpkSchoolComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() iconClass: string = '';
  @Input() svg: any = '';
}
