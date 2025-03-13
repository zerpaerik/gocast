import { Component, Input } from '@angular/core';
import { ApexChartComponent } from '../../apex-chart/apex-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spk-project-cards',
  standalone: true,
  imports: [ApexChartComponent,CommonModule],
  templateUrl: './spk-project-cards.component.html',
  styleUrl: './spk-project-cards.component.scss'
})
export class SpkProjectCardsComponent {
  @Input() title?: string;
  @Input() count?: string | number;
  @Input() percentage?: string;
  @Input() iconClass?: string;
  @Input() badgeClass?: string;
  @Input() chartOptions?: any;
  @Input() chartId?: string;
  @Input() avatarClass?: string;

}
