import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spk-landing-team-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-landing-team-card.component.html',
  styleUrl: './spk-landing-team-card.component.scss'
})
export class SpkLandingTeamCardComponent {
  @Input() name!: string;
  @Input() role!: string;
  @Input() teamClass!: string;
  @Input() class1!: string;
  @Input() description!: string;
  @Input() bodyClass!: string;
  @Input() image!: string;
  @Input() backgroundColor!: string;
  @Input() badgeColor!: string;
}
