import { Component, Input } from '@angular/core';
import { ApexChartComponent } from '../../apex-chart/apex-chart.component';

@Component({
  selector: 'app-spk-analytics-card',
  standalone: true,
  imports: [ApexChartComponent],
  templateUrl: './spk-analytics-card.component.html',
  styleUrl: './spk-analytics-card.component.scss'
})
export class SpkAnalyticsCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() percentageChange: string = '';
  @Input() percentageClass: string = '';
  @Input() chartOptions: any;
  @Input() iconClass: string = '';
  @Input() bgClass: string = '';
  @Input() trend: string = 'up'; 
}
