import { Component, Input } from '@angular/core';
import { ApexChartComponent } from '../../apex-chart/apex-chart.component';

@Component({
  selector: 'app-spk-widget-revenue-reusable',
  standalone: true,
  imports: [ApexChartComponent],
  templateUrl: './spk-widget-revenue-reusable.component.html',
  styleUrl: './spk-widget-revenue-reusable.component.scss'
})
export class SpkWidgetRevenueReusableComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() change: string = '';
  @Input() bg: string = '';
  @Input() arrow: string = '';
  @Input() changeType: string = 'success'; // 'success' or 'danger'
  @Input() iconClass: string = ''; // The class for the icon inside the avatar
  @Input() chartOptions: any = {}; // Chart options for ApexCharts
}
