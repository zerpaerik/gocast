import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-courses.component.html',
  styleUrl: './spk-courses.component.scss'
})
export class SpkCoursesComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() subtitle!: string;
  @Input() icon: any;
  @Input() badgeColor!: string;
  @Input() bgColor!: string;
  @Input() percentage!: string;
  @Input() badgeIcon: string='';
}
