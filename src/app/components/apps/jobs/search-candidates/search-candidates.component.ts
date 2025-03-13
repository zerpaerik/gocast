import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbCollapseModule, NgbDropdownModule ,NgbTooltipModule  } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkCandidateReusableCardComponent } from '../../../../@spk/reusable-apps/spk-candidate-reusable-card/spk-candidate-reusable-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-search-candidates',
  standalone: true,
  imports: [SharedModule, NgbCollapseModule, NgbDropdownModule,SpkCandidateReusableCardComponent,SpkDropdownsComponent,
     NgbTooltipModule, NouisliderModule, FormsModule,RouterModule,MaterialModuleModule,SpkNgSelectComponent],
  templateUrl: './search-candidates.component.html',
  styleUrl: './search-candidates.component.scss'
})
export class SearchCandidatesComponent {
  isCollapsed=true;
  isCollapsed1=true;
  public someRange: number[] = [1800.00, 8000.00];
 Categories=[
  {label:"All Categories",value:1},
  {label:"Software Developer",value:2},
  {label:"Web Developer",value:3},
  {label:"Software Architect",value:4},
  {label:"IT Hardware",value:5},
  {label:"Network Engineer",value:6},
  {label:"Angular Developer",value:7},
  {label:"React Developer",value:8}
 ]
 Qualification=[
  {label:"Fresher's",value:1},
  {label:"1 Year Exp",value:2},
  {label:"2 Year Exp",value:3},
  {label:"3 Year Exp",value:4},
  {label:"4 Year Exp",value:5},
  {label:"5 yrs Exp",value:6},
 ]
 candidates = [
  {
    name: 'Samantha',
    role: 'UI/UX Designer',
    location: 'Silicon Valley, CA',
    profilePic: './assets/images/faces/1.jpg',
    degree: "Master's Degree",
    workType: 'Remote Work',
    experience: 'UI Designer (2+ yrs)',
    jobType: 'Full Time',
    payRange: '$55,000 - $80,000',
    languages: 'English, Spanish',
    rating: 4.5,
    ratingCount: "245 Ratings",
    downloadbg:"info",
    wishlistbg:"danger"
  },
  {
    name: 'Michael',
    role: 'Frontend Developer',
    location: 'New York City, NY',
    profilePic: './assets/images/faces/2.jpg',
    degree: "Bachelor's Degree",
    workType: 'Remote Work',
    experience: 'Frontend Developer (4+ yrs)',
    jobType: 'Full Time',
    payRange: '$65,000 - $90,000',
    languages: 'English, French',
    rating: 4.5,
    ratingCount: "189 Ratings",
    downloadbg:"danger",
    wishlistbg:"info"
  },
  {
    
    name: 'Emily',
    role: 'Graphic Designer',
    location: 'Los Angeles, CA',
    rating: 3.5,
    degree: "Bachelor\'s Degree",
    workType: 'Remote Work',
    experience: 'Graphic Designer (3+ yrs)',
    jobType: 'Part Time',
    profilePic: './assets/images/faces/3.jpg',
    payRange: '$70,000 - $90,000',
    languages: 'English, Spanish',
    downloadbg:"info",
    wishlistbg:"danger",
    ratingCount: "201 Ratings",
  },
    {
      
      degree: "Bachelor's Degree",
      workType: 'On-site Work',
      experience: 'Software Engineer (5+ yrs)',
      jobType: 'Contract',
      payRange: '$80000 - $110000',
      languages: 'English, Mandarin',
      rating: 4.5,
      ratingCount: "172 Ratings",
      downloadbg:"info",
      wishlistbg:"danger",
      name: 'James',
      role: 'Software Engineer',
      location: 'Seattle, WA',
      profilePic: './assets/images/faces/4.jpg'
    },
    {
      name: 'Alexander',
      role: 'Digital Marketing Specialist', 
      location: 'Toronto, Canada',
      degree: "Bachelor's Degree",
      workType: 'On-site Work',
      experience: 'Digital Marketing (3+ yrs)',
      jobType: 'Full Time',
      payRange: '$60000 - $85000',
      languages: 'English, French',
      rating: 4.5,
      ratingCount: "156 Ratings",
      downloadbg:"info",
      wishlistbg:"danger",
      profilePic: './assets/images/faces/5.jpg',
    },
    {
      
      name: 'Sophia',
      role: 'Data Analyst',
      location: 'London, UK',
      degree: "Master's Degree",
      workType: 'Remote Work',
      experience: 'Data Analyst (4+ yrs)',
      jobType: 'Part Time',
      rating: 4.5,
      profilePic: './assets/images/faces/6.jpg',
      payRange: '$70,000 - $95,000',
      languages: 'English, Spanish',
      downloadbg:"info",
      wishlistbg:"danger",
      ratingCount: "178 Ratings",
    },
    {
      
      name: 'Marcus',
      role: 'Software Engineer',
      location: 'New York City, NY',
      rating: 4.0,
      degree: "Bachelor\'s Degree",
      workType: 'On-site Work',
      experience: 'Software Engineer (5+ yrs)',
      jobType: 'Full Time',
      profilePic: './assets/images/faces/7.jpg',
      payRange: '$85,000 - $110,000',
      languages: 'English',
      downloadbg:"info",
      wishlistbg:"danger",
      ratingCount: "120 Ratings",
    },
    {
      
      name: 'Emily',
      role: 'Graphic Designer',
      location: 'Los Angeles, CA',
      rating: 3.5,
      degree: "Bachelor\'s Degree",
      workType: 'Remote Work',
      experience: 'Graphic Designer (3+ yrs)',
      jobType: 'Part Time',
      profilePic: './assets/images/faces/8.jpg',
      payRange: '$70,000 - $90,000',
      languages: 'English, Spanish',
      downloadbg:"info",
      wishlistbg:"danger",
      ratingCount: "90 Ratings"
    },
    {
      name: 'Sophia',
      role: 'Digital Marketer',
      location: 'London, UK',
      profilePic: './assets/images/faces/9.jpg',
      degree: "Bachelor\'s Degree",
      workType: 'Remote Work',
      experience: 'Digital Marketer (4+ yrs)',
      jobType: 'Full Time',
      rating: 3.5,
      ratingCount: "180 Ratings",
      payRange: '£45,000 - £65,000',
      languages: 'English , French',
      downloadbg:"info",
      wishlistbg:"danger",
    },
    {
      name: 'Lucas',
      role: 'Data Analyst',
      location: 'Toronto, Canada',
      profilePic: './assets/images/faces/10.jpg',
      degree: "Master\'s Degree",
      workType: 'On-site Work',
      experience: 'Data Analyst (3+ yrs)',
      jobType: 'Part Time',
      rating: 3.5,
      ratingCount: "110 Ratings",
      payRange: 'CAD 65,000 - CAD 85,000',
      languages: 'English',
      downloadbg:"info",
      wishlistbg:"danger",
    }
];
}
