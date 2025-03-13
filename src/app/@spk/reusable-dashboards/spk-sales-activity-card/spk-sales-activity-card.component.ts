import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spk-sales-activity-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-sales-activity-card.component.html',
  styleUrl: './spk-sales-activity-card.component.scss'
})
export class SpkSalesActivityCardComponent {
  @Input() activities!: Array<{
    name: string;
    time: string;
    descriptionStart: string;
    action: string;
    actionClass: string;
    descriptionEnd?: string;
    status?: string;
    statusClass?: string;
  }>;
}
