import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-medical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-medical.component.html',
  styleUrl: './spk-medical.component.scss'
})
export class SpkMedicalComponent {
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() percentage: string = '';
  @Input() percentageClass: string = '';
  @Input() svgClass: string = '';
  @Input() icon: any = '';
}
