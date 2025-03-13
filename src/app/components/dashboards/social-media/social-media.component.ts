import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { chartOptions } from './../../../shared/data/table_data/widgets';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkSocialMediaCardComponent } from '../../../@spk/reusable-dashboards/spk-social-media-card/spk-social-media-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,NgbDropdownModule,SpkReusableTablesComponent,SpkSocialMediaCardComponent,SpkDropdownsComponent,
    ApexChartComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
chartOptions1:any={
  series: [1754, 1234, 878],
  labels: ["Mobile", "Tablet", "Desktop"],
  chart: {
      height: 197,
      type: 'donut',
  },
  dataLabels: {
      enabled: false,
  },

  legend: {
      show: false,
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: "#fff",
      width: 0,
      dashArray: 0,
  },
  plotOptions: {
      pie: {
          expandOnClick: false,
          donut: {
              size: '80%',
              background: 'transparent',
              labels: {
                  show: true,
                  name: {
                      show: true,
                      fontSize: '20px',
                      color: '#495057',
                      offsetY: -4
                  },
                  value: {
                      show: true,
                      fontSize: '18px',
                      color: undefined,
                      offsetY: 8,
                      formatter: function (val: string) {
                          return val + "%"
                      }
                  },
                  total: {
                      show: true,
                      showAlways: true,
                      label: 'Total',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#495057',
                  }

              }
          }
      }
  },
  colors: ["var(--primary-color)", "rgb(227, 84, 212)", "rgba(14, 165, 232, 1)"],
}
chartOptions:any={
  series: [{
    name: "Followers",
    data: [30, 58, 25, 42, 35, 33, 63, 25, 53, 57, 38, 40],
    type: 'column',
},
{
    name: "Total Views",
    data: [20, 38, 38, 72, 55, 73, 43, 55, 33, 45, 30, 60],
    type: 'line',
}],
chart: {
    type: 'line',
    height: 330,
    toolbar: {
      show: false,
    },
    dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 7,
        left: 0,
        blur: 1,
        color: ["rgb(227, 84, 212)",  'rgb(227, 84, 212)', 'transparent' , 'transparent'],
        opacity: 0.05,
      },
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '20%',
    borderRadius: 6
  },
},
grid: {
    borderColor: 'rgba(167, 180, 201 ,0.2)',
},
colors: ['var(--primary-color)', "rgb(227, 84, 212)"],
stroke: {
    width: [0, 2],
    curve: ["smooth", "straight"],
    dashArray: [0, 4], 
  },
dataLabels: {
    enabled: false,
},fill: {
    opacity: 1
  },
  legend: {
    show: true,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'top',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '12px',
    bottom:'12px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    inverseOrder: false,
    markers: {
        size: 5,
        shape: undefined,
        border:'none',
        strokeWidth: 0
    },
 
  },
yaxis: {
    labels: {
      
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
      },
    },
},
xaxis: {
    type: 'month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
    axisBorder: {
        show: true,
        color: 'rgba(167, 180, 201 ,0.2)',
        offsetX: 0,
        offsetY: 0,
    },
    axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'rgba(167, 180, 201 ,0.2)',
        width: 6,
        offsetX: 0,
        offsetY: 0
    },
    labels: {
        rotate: -90,
        style: {
            colors: "#8c9097",
            fontSize: '11px',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-label',
        },
    }
}
}
cardData:any=[
    {
      id:1,
      title:"Instagram",
      value:"457K",
      graph:"Followers",
      color:"danger",
      percentage:"1.5%",
      percentageIcon:"bi bi-arrow-down-right me-1 fs-10",
      bg:"primary2",
      icon:"ri-instagram-line fs-25 lh-1",
      socialicon:'insta',
    },
    {
      id:2,
      title:"Linked In",
      value:"457K",
      graph:"Followers",
      color:"danger",
      percentage:"1.5%",
      percentageIcon:"bi bi-arrow-down-right me-1 fs-10",
      bg:"info",
      socialicon:'linkedin',
    },
    {
      id:3,
      title:"Facebook",
      value:"2.1K",
      graph:"1 hr ago",
      color:"danger",
      percentage:"1.9%",
      percentageIcon:"bi bi-arrow-down-right me-1 fs-10",
      bg:"primary",
      socialicon:'fb',
    },
    {
        id:4,
        title:"Twitter",
        value:"2.1K",
        graph:"1 week ago",
        color:"success",
        percentage:"1.9%",
        percentageIcon:"bi bi-arrow-up-right me-1 fs-10",
        bg:"dark",
        socialicon:'twit',
    },
    {
      id:5,
      title:"Youtube",
      value:"1.1M",
      graph:"1 day ago",
      color:"success",
      percentage:"1.9%",
      percentageIcon:"bi bi-arrow-up-right me-1 fs-10",
      bg:"danger",
      socialicon:'youtube'
    },
    {
        id:6,
        title:"Messenger",
        value:"1.1M",
        graph:"1 day ago",
        color:"success",
        percentage:"1.9%",
        percentageIcon:"bi bi-arrow-up-right me-1 fs-10",
        bg:"secondary",
        socialicon:'msgr'
      }
  ]
  socialMediColumns=[
    { header: 'Date', field: 'Date' },
    { header: 'Platform', field: 'Platform' },
    { header: 'Likes', field: 'Likes' },
    { header: 'Comments', field: 'Comments' },
    { header: 'Shares', field: 'Shares' },
    { header: 'Impressions', field: 'Impressions' },
    { header: 'Engaged (%)', field: 'Engaged (%)' },
    { header: 'Followers', field: 'Followers' },
    { header: 'Following', field: 'Following' },
  ]
  socials=[
    {date:"2024-02-15",bg:"danger",icon:"youtube",title:"Youtube",likes:"150",comments:"25",shares:"50",bg1:"primary",percent:"3.5%",followers:"458",following:"256",impressions:"10,000"},
    {date:"2024-02-14",bg:"dark",icon:"twitter-x",title:"Twitter",likes:"200",comments:"30",shares:"70",bg1:"secondary",percent:"4.2%",followers:"565",following:"355",impressions:"15,000"},
    {date:"2024-02-13",bg:"info",icon:"messenger",title:"Facebook",likes:"300",comments:"40",shares:"90",bg1:"success",percent:"5.0%",followers:"458",following:"956",impressions:"20,000"},
    {date:"2024-02-12",bg:"secondary",icon:"instagram",title:"Instagram",likes:"100",comments:"20",shares:"30",bg1:"orange",percent:"2.1%",followers:"458",following:"256",impressions:"8,000"},
    {date:"2024-02-11",bg:"dark",icon:"twitter-x",title:"Twitter",likes:"120",comments:"15",shares:"40",bg1:"info",percent:"3.0%",followers:"856",following:"295",impressions:"12,000"}
  ]
}
