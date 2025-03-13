import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-spk-social-media-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-social-media-card.component.html',
  styleUrl: './spk-social-media-card.component.scss'
})
export class SpkSocialMediaCardComponent {
  @Input() socialmedia! :any;



  constructor(private sanitizer: DomSanitizer) {}
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
