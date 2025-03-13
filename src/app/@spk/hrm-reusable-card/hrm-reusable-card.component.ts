import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApexChartComponent } from '../apex-chart/apex-chart.component';

@Component({
  selector: 'app-hrm-reusable-card',
  standalone: true,
  imports: [CommonModule,ApexChartComponent],
  templateUrl: './hrm-reusable-card.component.html',
  styleUrl: './hrm-reusable-card.component.scss'
})
export class HrmReusableCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() percentage!: string;
  @Input() subtitle!: string;
  @Input() badgeClass!: string;
  @Input() iconClass!: string;
  @Input() chartId!: string;
  @Input() chartOptions!: any;
}
