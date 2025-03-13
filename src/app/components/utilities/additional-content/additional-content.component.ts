import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-additional-content',
  standalone: true,
  imports: [SharedModule,SpkReusableTablesComponent,CommonModule],
  templateUrl: './additional-content.component.html',
  styleUrl: './additional-content.component.scss'
})
export class AdditionalContentComponent {
  tableHeight: string = '100px'; // Set the desired height
}
