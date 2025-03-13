import { chartOptions } from './../../../shared/data/table_data/widgets';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {
chartOptions:any=
  {
    series: [
      {
        type: "area",
        name: "Staff",
        data: [
          {
            x: "Jan",
            y: 100,
          },
          {
            x: "Feb",
            y: 210,
          },
          {
            x: "Mar",
            y: 180,
          },
          {
            x: "Apr",
            y: 454,
          },
          {
            x: "May",
            y: 230,
          },
          {
            x: "Jun",
            y: 320,
          },
          {
            x: "Jul",
            y: 656,
          },
          {
            x: "Aug",
            y: 830,
          },
          {
            x: "Sep",
            y: 350,
          },
          {
            x: "Oct",
            y: 350,
          },
          {
            x: "Nov",
            y: 210,
          },
          {
            x: "Dec",
            y: 410,
          },
        ],
      },
      {
        type: "area",
        name: "Students",
        data: [
          {
            x: "Jan",
            y: 180,
          },
          {
            x: "Feb",
            y: 620,
          },
          {
            x: "Mar",
            y: 476,
          },
          {
            x: "Apr",
            y: 220,
          },
          {
            x: "May",
            y: 520,
          },
          {
            x: "Jun",
            y: 780,
          },
          {
            x: "Jul",
            y: 435,
          },
          {
            x: "Aug",
            y: 515,
          },
          {
            x: "Sep",
            y: 738,
          },
          {
            x: "Oct",
            y: 454,
          },
          {
            x: "Nov",
            y: 525,
          },
          {
            x: "Dec",
            y: 230,
          },
        ],
      },
      {
        type: "column",
        name: "Teachers",
        chart: {
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        data: [
          {
            x: "Jan",
            y: 210,
          },
          {
            x: "Feb",
            y: 380,
          },
          {
            x: "Mar",
            y: 400,
          },
          {
            x: "Apr",
            y: 250,
          },
          {
            x: "May",
            y: 300,
          },
          {
            x: "Jun",
            y: 420,
          },
          {
            x: "Jul",
            y: 380,
          },
          {
            x: "Aug",
            y: 280,
          },
          {
            x: "Sep",
            y: 380,
          },
          {
            x: "Oct",
            y: 350,
          },
          {
            x: "Nov",
            y: 230,
          },
          {
            x: "Dec",
            y: 250,
          },
        ],
      },
    ],
    chart: {
      height: 336,
      animations: {
        speed: 500,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["rgb(158, 92, 247)", "rgb(255, 93, 159)", "var(--primary-color)"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
    },
  
    fill: {
      type: ["gradient", "gradient", "solid"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        colorStops: [
          [
            {
              offset: 0,
              color: "rgb(158, 92, 247)",
              opacity: 0.05,
            },
            {
              offset: 100,
              color: "rgb(158, 92, 247)",
              opacity: 0.05,
            },
          ],[
              {
                offset: 0,
                color: "rgb(255, 93, 159)",
                opacity:0.05,
              },
              {
                offset: 100,
                color: "rgb(255, 93, 159)",
                opacity: 0.05,
              },
            ],
        ],
      },
    },
    stroke: {
      curve: "smooth",
      width: [1, 1, 0],
      dashArray: [4, 0, 0, 0],
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value: any) {
          return value;
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: "2",
      },
    },
    legend: {
      show: false,
      position:"bottom",
      customLegendItems: ["Staff", "Students", "Teachers"],
      inverseOrder: true,
    },
    markers: {
      hover: {
        sizeOffset: 5,
      },
    },
  }
  chartOptions1:any={
    series: [{
      name: 'Projects',
      type: 'line',
      data: [26, 58,44, 42, 57, 55, 45],
  }, {
      name: 'Tasks',
      type: 'line',
      data: [56, 41, 55, 34, 54, 42, 57],
  }],
  chart: {
      height: 282,
      type: 'line',
      stacked: false,
      toolbar: {
          show: false
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 7,
          left: 0,
          blur: 3,
          color: ["var(--primary-color)", "rgb(215, 124, 247)", "rgb(12, 215, 177)"],
          opacity: 0.1
      },
  },
  colors: ["var(--primary-color)", "rgb(215, 124, 247)", "rgb(12, 215, 177)"],
  grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
  },
  stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
  },
  plotOptions: {
      bar: {
          columnWidth: '30%',
          borderRadius: 5,
      }
  },
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  markers: {
      size: 0,
  },
  legend: {
      show: true,
      position: 'top',
      fontFamily: "Montserrat",
      markers: {
          size: 5,
      }
  },
  xaxis: {
      type: 'week',
      axisBorder: {
          show: true,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
          offsetX: 0,
          offsetY: 0
      },
      labels: {
          rotate: -90
      }
  },
  yaxis: {
      title: {
          style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
          },
      },
  },
  tooltip: {
      shared: true,
      theme: "dark",
  }
  }
  teacherColumns=[
    { header: 'Teacher', field: 'teacher' },
    { header: 'Qualification', field: 'qualification' },
    { header: 'Subject', field: 'subject' },
    { header: 'Action', field: 'action' },
  ]
  teacherslist=[
    {src:"./assets/images/faces/11.jpg",text:"primary",name:"John Smith",qualification:"M.Ed",subject:"Mathematics" },
    {src:"./assets/images/faces/3.jpg",text:"secondary",name:"Mary Johnson", qualification:"B.A. in English",subject:"English"},
    {src:"./assets/images/faces/4.jpg",text:"danger", name:"Robert Davis",qualification:"Ph.D. in Science",subject:"Physics"},
    {src:"./assets/images/faces/1.jpg",text:"info",name:"Sarah Thompson",qualification:"M.A. in History",subject:"History"},
    { src:"./assets/images/faces/15.jpg",text:"success",name:"Michael Brown", qualification:"B.Ed", subject:"Chemistry"},
    { src:"./assets/images/faces/2.jpg",text:"pink",name:"Emily Wilson", qualification:"M.A. in Geography", subject:"Geography"},
    { src:"./assets/images/faces/5.jpg",text:"warning",name:"Sarah Smith", qualification:"M.A.", subject:"Hindi"}
  ]
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  noticeslist=[
    {
      bg:"primary",
      title:"Inter-School Sports Day",
      date:"20 Mar 2024",
      description:"Students are gearing up for the annual inter-school.",
      svg:`<svg class="avatar-md avatar bg-primary-transparent svg-primary  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z"></path></svg>`
    },
    {
      bg:"primary1",
      title1:"Science Fare",
      title:"Science Exhibition",
      date:"24 Mar 2024",
      description:"Explore innovative projects and experiments by our students.",
      svg:`<svg class="avatar-md avatar bg-primary1-transparent svg-primary1  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>`
    },
    {
      bg:"primary2",
      title:"Cultural Fest 2024",
      date:"09 Apr 2024",
      description:"Join us for a vibrant celebration of cultural diversity",
      svg:`<svg  class="avatar-md avatar bg-primary2-transparent svg-primary2  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.16L64,208.94l28.42,14.22a8,8,0,0,0,7.16,0L128,208.94l28.42,14.22a8,8,0,0,0,7.16,0L192,208.94l28.42,14.22A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM60.42,167.16a8,8,0,0,0,10.74-3.58L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16l-32-64a8,8,0,0,0-14.32,0l-32,64A8,8,0,0,0,60.42,167.16ZM96,113.89,107.06,136H84.94ZM136,128a8,8,0,0,1,8-8h16V104a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H176v16a8,8,0,0,1-16,0V136H144A8,8,0,0,1,136,128Z"></path></svg>`
    },
    {
      bg:"primary3",
      title:"Founders' Day Celebration",
      date:"09 Apr 2024",
      description:"Commemorating the vision and values of our school's founders.",
      svg:` <svg class="avatar-md avatar bg-primary3-transparent svg-primary3  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>`
    },
    {
      bg:"secondary",
      title:"Literary Week",
      date:"09 Apr 2024",
      description:"Engage in a week full of literary activities.",
      svg:` <svg class="avatar-md avatar bg-secondary-transparent svg-secondary  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>`
    }
  ]
  studentColumns=[
    { header: 'S.No', field: 'S.No' },
    { header: 'ID', field: 'ID' },
    { header: 'Student', field: 'Student' },
    { header: 'Class', field: 'Class' },
    { header: 'Section', field: 'Section' },
    { header: 'Marks In %', field: 'Marks In %' },
    { header: 'Marks In GPA', field: 'Marks In GPA' },
    { header: 'Status', field: 'Status' },
    { header: 'Actions', field: 'actions' },
  ]
  studenslist=[
    {
      sno:1,
      id:"#1116",
      src:"./assets/images/faces/2.jpg",
      name:"Studar Little",
      class:"IX",
      section:"B",
      percent:"75%",
      cgpa:"7.5",
      status:"Pass",
      bg:"success",

    },
    {
      sno:2,
      id:"#8457",
      src:"./assets/images/faces/4.jpg",
      name:"Ion Somer",
      class:"X",
      section:"A",
      percent:"65%",
      cgpa:"6.5",
      status:"Pass",
      bg:"success",

    },
    {
      sno:3,
      id:"#7564",
      src:"./assets/images/faces/6.jpg",
      name:"Shakira",
      class:"X",
      section:"B",
      percent:"25%",
      cgpa:"2.5",
      status:"Fail",
      bg:"danger",
    },
    {
      sno:4,
      id:"#1254",
      src:"./assets/images/faces/8.jpg",
      name:"Thomas Shelby",
      class:"IX",
      section:"A",
      percent:"95%",
      cgpa:"9.5",
      status:"Pass",
      bg:"success",
    },
    {
      sno:5,
      id:"#7458",
      src:"./assets/images/faces/10.jpg",
      name:"Stefan U",
      class:"IX",
      section:"B",
      percent:"62%",
      cgpa:"6.2",
      status:"Pass",
      bg:"success",
    },
    {
      sno:6,
      id:"#6325",
      src:"./assets/images/faces/12.jpg",
      name:"Michael Shreff",
      class:"X",
      section:"A",
      percent:"15%",
      cgpa:"1.5",
      status:"Fail",
      bg:"danger",
    }
  ]
  resultColumns=[
    { header: 'ID', field: 'ID' },
    { header: 'Student', field: 'Student' },
    { header: 'Subject', field: 'Subject' },
    { header: 'Score', field: 'Score' },
  ]
  resultslist=[
    {id:"#8547",src:"./assets/images/faces/4.jpg",name:"Ion Somer",subject:"Science",score:"92%"},
    {id:"#7564", src:"./assets/images/faces/6.jpg",name:"Shakira",subject:"English", score:"78%" },
    {id:"#1254", src:"./assets/images/faces/8.jpg",name:"Thomas Shelby",subject:"History",score:"88%"},
    {id:"#7458",src:"./assets/images/faces/10.jpg", name:"Stefan U",subject:"Geography",score:"65%" },
    {id:"#6325",src:"./assets/images/faces/12.jpg",name:"Michael Shreff",subject:"Physics",score:"80%"},
    {id:"#2321",src:"./assets/images/faces/4.jpg",name:"Leo Phllip",subject:"Chemistry",score:"83%"}
  ]
}
