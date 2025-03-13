import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-spk-landing-services-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-landing-services-card.component.html',
  styleUrl: './spk-landing-services-card.component.scss'
})
export class SpkLandingServicesCardComponent {
  @Input() bgColor: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  constructor(private sanitizer: DomSanitizer) {}
  @Input() svg!: SafeHtml; 
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
