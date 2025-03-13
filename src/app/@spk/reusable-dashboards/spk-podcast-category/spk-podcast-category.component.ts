import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-podcast-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-podcast-category.component.html',
  styleUrl: './spk-podcast-category.component.scss'
})
export class SpkPodcastCategoryComponent {
  @Input() iconClass: string = '';
  @Input() category: string = '';
  @Input() count: number = 0;
  @Input() bgClass: string = '';
}
