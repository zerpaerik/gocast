import { NouisliderModule } from 'ng2-nouislider';
import { Component } from '@angular/core';
import { NgbCollapseModule,NgbDropdownModule,NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/sharedmodule';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SpkSearchJobsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-search-jobs-reusable-card/spk-search-jobs-reusable-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-search-jobs',
  standalone: true,
  imports: [SharedModule,NgbCollapseModule,NgbDropdownModule,NgbTooltipModule,SpkSearchJobsReusableCardComponent,SpkDropdownsComponent,
    FormsModule,NouisliderModule,MaterialModuleModule],
  templateUrl: './search-jobs.component.html',
  styleUrl: './search-jobs.component.scss'
})
export class SearchJobsComponent {
  isCollapsed=true;
  isCollapsed1=true;
  public someRange: number[] = [1800.00, 8000.00];
  jobListings=[
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Frontend Developer',
      companyName: 'Tech Solutions Inc.',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$45,000 - $60,000',
      imgSrc: './assets/images/media/jobs/2.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary",
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary",
      imgSrc: './assets/images/media/jobs/1.png',
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Frontend Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/3.png',
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3",
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary",

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Wordpress Developer',
      companyName: 'Hardware Private Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3",
      imgSrc: './assets/images/media/jobs/4.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary"

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'HTML Developer - Fresher',
      companyName: 'InnovateZ Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/2.png',
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3",
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary",

    },
   {
    buttonClass:"d-inline-flex",
    ngbDropdown:true,
    icons:false,
    icon:false,
    buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/1.png',
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3",
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary"

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Frontend Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3",
      imgSrc: './assets/images/media/jobs/3.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary"

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'HTML Developer - Remote',
      companyName: 'InnovateZ Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/2.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary",
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/1.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary",
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3"


    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Frontend Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/3.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary",
      experienceClass:"fs-11 border border-primary3 border-opacity-10 text-primary3"


    },
  ]
}
