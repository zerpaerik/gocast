import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkPodcastComponent } from '../../../@spk/reusable-dashboards/spk-podcast/spk-podcast.component';
import { SpkPodcastCategoryComponent } from '../../../@spk/reusable-dashboards/spk-podcast-category/spk-podcast-category.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,SpkDropdownsComponent,
    SpkReusableTablesComponent,SpkPodcastComponent,SpkPodcastCategoryComponent],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent {
  playedColumns=[
    { header: 'Podcast Name', field: 'podcast' },
    { header: 'duration', field: 'duration' },
    { header: 'Category', field: 'Category' },
    { header: 'Latest Episode', field: 'latestepisode' },
    { header: 'Average Duration', field: 'Average Duration' },
    { header: 'Favourites', field: 'favourites' },
    { header: 'Action', field: 'Action' },
  ]
  recentslist=[
    {
      src:"./assets/images/podcast/6.jpg",
      podcast:"Whimsical Wonders",
      name:"Emily Watson",
      duration:"150s",
      type:"Comedy",
      episode:"#156: Silly Stories",
      avgduration:"45 mins",
      bg:"danger",
      bg1:"secondary",
      status:"Added"
    },
    {
      src:"./assets/images/podcast/7.jpg",
      podcast:"Mindful Meditations",
      name:"Sarah Johnson",
      duration:"1 min",
      type:"Culture",
      episode:"#82: Deep Nonsense",
      avgduration:"30 mins",
      bg:"muted op-2",
      bg1:"success",
      status:"Add Now"
    },
    {
      src:"./assets/images/podcast/8.jpg",
      podcast:"Deep Dive Dialogues",
      name:"John Doe",
      duration:"2 min",
      type:"Personal Journal",
      episode:"#30: Life's Random Moments",
      avgduration:"60 mins",
      bg:"danger",
      bg1:"info",
      status:"Added"
    },
    {
      src:"./assets/images/podcast/9.jpg",
      podcast:"Random Revelations",
      name:"Sophia Brown",
      duration:"2 min",
      type:"News and Politics",
      episode:"#300: Current Affairs",
      avgduration:"20 mins",
      bg:"muted op-2",
      bg1:"warning",
      status:"Add Now"
    },
    {
      src:"./assets/images/media/media-60.jpg",
      podcast:"Bite-sized Banter",
      name:"Michael Smith",
      duration:"4 min",
      type:"Food and Drink",
      episode:"#45: Culinary Capers",
      avgduration:"50 mins",
      bg:"danger",
      bg1:"primary",
      status:"Added"
    }
  ]
  podcasts = [
    {
      title: 'Foodie Adventures',
      author: 'Chef Mia Johnson',
      image: './assets/images/podcast/6.jpg',
      listeners: '75.3k'
    },
    {
      title: 'Environmental Insights',
      author: 'Dr. David Green',
      image: './assets/images/podcast/7.jpg',
      listeners: '75.3k'
    },
    {
      title: 'Travel Tales',
      author: 'Wanderlost Explorers',
      image: './assets/images/podcast/7.jpg',
      listeners: '75.3k'
    }
  ];
  podcasts1 = [
    {
      title: 'True Crime Files',
      author: 'Detective John Smith',
      image: './assets/images/podcast/9.jpg',
      listeners: '75.3k',
    },
    {
      title: 'Science Explained',
      author: 'Dr. Michael Lee',
      image: './assets/images/podcast/8.jpg',
      listeners: '75.3k',
    },
    {
      title: 'Business Buzz',
      author: ' Emily Davis',
      image: './assets/images/podcast/8.jpg',
      listeners: '75.3k',
    }
  ];
  contacts = [
    { iconClass: 'ri-macbook-line', category: 'Technology', count: 250, bgClass: 'bg-primary-transparent' },
    { iconClass: 'ri-briefcase-2-line', category: 'Business', count: 236, bgClass: 'bg-primary1-transparent' },
    { iconClass: 'ri-heart-pulse-line', category: 'Health', count: 236, bgClass: 'bg-primary2-transparent' },
    { iconClass: 'ri-football-line', category: 'Sports', count: 236, bgClass: 'bg-primary3-transparent' },
    { iconClass: 'ri-flask-line', category: 'Science', count: 236, bgClass: 'bg-secondary-transparent' },
    { iconClass: 'ri-book-line', category: 'Education', count: 236, bgClass: 'bg-warning-transparent' },
    { iconClass: 'ri-disc-line', category: 'Music', count: 236, bgClass: 'bg-info-transparent' },
    { iconClass: 'ri-tv-line', category: 'Entertainment', count: 236, bgClass: 'bg-danger-transparent' }
  ];
}
