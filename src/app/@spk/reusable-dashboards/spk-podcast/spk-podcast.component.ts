import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkDropdownsComponent } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-podcast',
  standalone: true,
  imports: [NgbModule,SpkDropdownsComponent],
  templateUrl: './spk-podcast.component.html',
  styleUrl: './spk-podcast.component.scss'
})
export class SpkPodcastComponent {
  @Input() podcast: any;
}
