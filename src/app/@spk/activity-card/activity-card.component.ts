import { Component, Input } from '@angular/core';
interface Activity {
  title: string;
  description: string;
  date: string;
  linkText?: string;
  linkUrl?: string;
  iconClass?: string;
}
@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {
  @Input() activities:any[] = [];
}
