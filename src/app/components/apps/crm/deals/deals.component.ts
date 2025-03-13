import { Component } from '@angular/core';
import { NgbDropdownModule,NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import flatpickr from 'flatpickr';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { DragDropModule,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SharedModule } from '../../../../shared/sharedmodule';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';
import { SpkLeadsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-leads-reusable-card/spk-leads-reusable-card.component';
import { SpkDealsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-deals-reusable-card/spk-deals-reusable-card.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule,SortablejsModule,SpkLeadsReusableCardComponent,SpkFlatpickrComponent,SpkDropdownsComponent,
     FlatpickrModule, FormsModule,DragDropModule,SpkDealsReusableCardComponent],
  templateUrl: './deals.component.html',
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults,],
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {

	}
  url1: string = ''; // Assuming url1 is a property in your component

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) { 
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
	open(content:any) {
		this.modalService.open(content,{ centered: true });
	}
  // selectedDate: Date | null = null; 
  flatpickrOptions: any = {
    inline: true,
   
  };
  // flatpickrOptions: FlatpickrOptions;

  ngOnInit() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    flatpickr('#targetDate', this.flatpickrOptions)
  }
  normalList1 = []; 
  normalList2 = []; 
  normalList3 = []; 
  normalList4 = []; 
  normalList5 = []; 
  normalList6 = []; 





  normalOptions: any = {
       animation: 150,
    group: 'shared',
    // Your sortable options
    onEnd: (event: any) => this.handleDragEnd(event)
  };
  normalOptions1: any = {
    animation: 150,
 group: 'shared',
 // Your sortable options
 onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions2: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions3: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions4: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions5: any = {
    animation: 150,
    group: 'shared',
    // Your sortable options
    onEnd: (event: any) => this.handleDragEnd(event)
    };
handleDragEnd(event: any): void {
    const container = document.getElementById('new-tasks-draggable');
    const cardElements = document.querySelectorAll('#new-tasks-draggable .card');
    if (container) {
      // Check if there are no child cards left
      if (container.children.length === 0) {
        container.classList.add('task-Null');
      } else {
        container.classList.remove('task-Null');
      }
    }
  }
  leads = [
    {
      name: 'John Doe',
      date: '21, May 2024 - 10:25AM',
      company: 'Beta Innovations',
      amount: '50,000',
      imageUrl: './assets/images/faces/11.jpg',
      company1:"Initech Info"
    },
    {
      name: 'Jane Smith',
      date: '15, April 2024 - 02:15PM',
      company: 'Alpha Solutions',
      amount: '75,000',
      imageUrl: './assets/images/faces/12.jpg',
      company1: 'TechCorp'
    },
    {
      name: 'Michael Johnson',
      date: '05, March 2024 - 11:30AM',
      company: 'Gamma Enterprises',
      amount: '100,000',
      imageUrl: './assets/images/faces/13.jpg',
      company1: 'NextGen Inc'
    },
    {
      name: 'Emma Wilson',
      date: '10, February 2024 - 09:45AM',
      company: 'Delta Dynamics',
      amount: '120,000',
      imageUrl: './assets/images/faces/14.jpg',
      company1: 'InnovateX'
    }
  ];
  qualifiedLeads = [

    {
      name: 'Daniel Brown',
      date: '18, January 2024 - 03:20PM',
      company: 'Omega Solutions',
      amount: '95,000',
      imageUrl: './assets/images/faces/15.jpg',
      company1:"SkyTech",
      amountType:"Amount"
    },
    {
      name: 'Emily Brown',
      date: '18, June 2024 - 11:15AM',
      company: 'Delta Innovations',
      amount: '65,000',
      imageUrl: './assets/images/faces/12.jpg',
      company1:"Tech Dynamics",
      amountType:"Amount"

    },
    {
      name: 'James Wilson',
      date: '12, June 2024 - 09:30AM',
      company: 'Gamma Enterprises',
      amount: '80,000',
      imageUrl: './assets/images/faces/13.jpg',
      company1:"Tech Solutions Inc.",
      amountType:"Amount"

    },
    {
      name: 'Liam Smith',
      date: '30, June 2024 - 01:45PM',
      company: 'Zeta Corporation',
      amount: '105,000',
      imageUrl: './assets/images/faces/12.jpg',
      company1:"TechVision Ltd.",
      amountType:"Agreed Amount"

    }
  ];
 contacts = [
    {
      name: 'Sarah Martinez',
      date: '05, June 2024 - 10:45AM',
      company: 'AlphaTech Solutions',
      amount: '75,000',
      imageUrl: './assets/images/faces/14.jpg',
      dealName: 'InnovateX',amountType:"Amount"
    },
    {
      name: 'Robert Lee',
      date: '30, May 2024 - 02:00PM',
      company: 'Omega Ventures',
      amount: '90,000',
      imageUrl: './assets/images/faces/15.jpg',
      dealName: 'NextGen Tech',
      amountType:"Amount"
    }
  ];
  needs = [
    {
      name: 'David Wilson',
      date: '08, June 2024 - 09:45AM',
      company: 'Alpha Solutions',
      amount: '70,000',
      imageUrl: './assets/images/faces/11.jpg',
      dealName: 'Tech Innovations',
      amountType:"Amount"
    },
    {
      name: 'Emma Clark',
      date: '20, May 2024 - 03:30PM',
      company: 'Zeta Dynamics',
      amount: '85,000',
      imageUrl: './assets/images/faces/16.jpg',
      dealName: 'TechStar Solutions',
      amountType:"Amount"
    },
    {
      name: 'David Wilson',
      date: '07, June 2024 - 09:45AM',
      company: 'AlphaTech Solutions',
      amount: '100,000',
      imageUrl: './assets/images/faces/11.jpg',
      dealName: 'Tech Innovations',
      amountType:"Budget"
    },
    {
      name: 'Sophie Adams',
      date: '14, June 2024 - 11:30AM',
      company: 'GammaTech Solutions',
      amount: '120,000',
      imageUrl: './assets/images/faces/15.jpg',
      dealName: 'InnovateX',
      amountType:"Estimated Revenue"
    }
  ];
  negotiation= [
    {
      name: 'Olivia Moore',
      date: '25, May 2024 - 02:15PM',
      company: 'Delta Dynamics',
      amount: '90,000',
      imageUrl: './assets/images/faces/9.jpg',
      dealName: 'TechStar Solutions',
      amountType:"Expected Investment"
    },
    {
      name: 'Michael Johnson',
      date: '15, June 2024 - 11:00AM',
      company: 'AlphaTech Solutions',
      amount: '120,000',
      imageUrl: './assets/images/faces/15.jpg',
      dealName: 'Tech Innovations',
      amountType:"Proposed Amount"
    },
    {
      name: 'Emily Davis',
      date: '10, June 2024 - 09:30AM',
      company: 'BetaTech Innovations',
      amount: '150,000',
      imageUrl: './assets/images/faces/16.jpg',
      dealName: 'Tech Solutions Ltd.',
      amountType:"Estimated Budget"
    }
  ];
  finalized = [
    {
      name: 'Emma Thompson',
      date: '25, June 2024 - 03:45PM',
      company: 'Delta Dynamics',
      amount: '120,000',
      imageUrl: './assets/images/faces/12.jpg',
      dealName: 'TechStar Innovations',
      amountType:"Amount"
    },
    {
      name: 'Sophia Garcia',
      date: '18, June 2024 - 09:30AM',
      company: 'Completed Gamma Technologies',
      amount: '85,000',
      imageUrl: './assets/images/faces/3.jpg',
      dealName: 'TechSolutions Inc.',
      amountType:"Investment"
    }
  ];
  leadCards = [
    {
      title: 'Leads Discovered',
      count: '24',
      iconClass: 'bg-primary-transparent text-primary',
      borderClass: 'border-primary',
      badgeClass: 'bg-primary'
    },
    {
      title: 'Qualified Leads',
      count: '17',
      iconClass: 'bg-primary1-transparent text-primary1',
      borderClass: 'border-primary1',
      badgeClass: 'bg-primary1 text-fixed-white'
    },
    {
      title: 'Contact Initiated',
      count: '5',
      iconClass: 'bg-primary2-transparent text-primary2',
      borderClass: 'border-primary2',
      badgeClass: 'bg-primary2 text-fixed-white'
    },
    {
      title: 'Needs Identified',
      count: '43',
      iconClass: 'bg-primary3-transparent text-primary3',
      borderClass: 'border-primary3',
      badgeClass: 'bg-primary3 text-fixed-white'
    },
    {
      title: 'Negotiation',
      count: '15',
      iconClass: 'bg-secondary-transparent text-secondary',
      borderClass: 'border-secondary',
      badgeClass: 'bg-secondary text-fixed-white'
    },
    {
      title: 'Deal Finalized',
      count: '127 Deals',
      iconClass: 'bg-success-transparent text-success',
      borderClass: 'border-success',
      badgeClass: 'bg-success text-fixed-white'
    }
  ];
}
