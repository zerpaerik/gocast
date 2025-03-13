import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-wallet-integration',
  standalone: true,
  imports: [SharedModule,NgbModule,SpkDropdownsComponent],
  templateUrl: './wallet-integration.component.html',
  styleUrl: './wallet-integration.component.scss'
})
export class WalletIntegrationComponent {

}
