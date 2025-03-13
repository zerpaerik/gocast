import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApexChartComponent } from '../../apex-chart/apex-chart.component';

@Component({
  selector: 'spk-crypto-dashboard',
  standalone: true,
  imports: [ApexChartComponent,CommonModule],
  templateUrl: './spk-crypto-dashboard.component.html',
  styleUrl: './spk-crypto-dashboard.component.scss'
})
export class SpkCryptoDashboardComponent {
  @Input() imgSrc?: string;
  @Input() id?: string;
  @Input() name?: string;
  @Input() symbol?: string;
  @Input() value?: string;
  @Input() price?: string;
  @Input() change!: string;
  @Input() changeType?: string;
  @Input() chartOptions?: any;
  @Input() chartSeries?: any;
  @Input() type?: string;
  @Input() width?: number | string;
  @Input() height?: number | string;
}
