import { chartOptions } from './../../../shared/data/table_data/widgets';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-medical',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgbTooltipModule,NgbModule,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent],
  templateUrl: './medical.component.html',
  styleUrl: './medical.component.scss'
})
export class MedicalComponent {
chartOptions:any=
  {
    series: [
      {
          name: "Old Patients",
          data: [30, 35, 35, 30, 45, 25, 36, 54, 36, 29, 49, 42],
      },
      {
          name: "New Patients",
          data: [45, 30, 49, 30, 45, 25, 36, 54, 36, 29, 49, 42],
      },
  ],
  chart: {
      type: "bar",
      height: 365,
      toolbar: {
          show: false,
      },
      dropShadow: {
          enabled: false,
      },
      stacked: true,
  },
  plotOptions: {
      bar: {
          columnWidth: "30%",
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "all",
          borderRadius: 3,
      },
  },
  stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      // width: [5, 5],
      dashArray: 0,
  },
  grid: {
      borderColor: "#f5f4f4",
      strokeDashArray: 5,
      yaxis: {
          lines: {
              show: true, // Ensure y-axis grids are shown
          },
      },
  },
  colors: ["var(--primary-color)", "rgba(227, 84, 212, 1)"],
  dataLabels: {
      enabled: false,
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
      title: {
          style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
          },
      },
      axisBorder: {
          show: true,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: true,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
      },
      labels: {
          formatter: function (y: number) {
              return y.toFixed(0) + "";
          },
      },
  },
  xaxis: {
      type: "month",
      categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "sep",
          "oct",
          "nov",
          "dec",
      ],
      axisBorder: {
          show: false,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: false,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
      },
      labels: {
          rotate: -90,
      },
  },
  }
  chartOptions1:any={
    series: [230, 200, 178, 153],
    chart: {
      // width: 300,
      height: 300,
      type: 'polarArea',
    },
    colors: ["var(--primary-color)", "rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 1)", "rgba(255, 142, 111, 1)"],
    labels: ["Revenue", "Income", "Profit", "Patients"],
    legend: {
      show: false,
    },
    stroke: {
      width: 0
    },
    fill: {
      opacity: 0.8
    },
  }
  chartOptions2:any={
    series: [1754, 1234],
    labels: ["Male", "Female"],
    chart: {
      height: 280,
      type: "donut",
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: "#525050",
        opacity: 0.1,
      },
    },
    dataLabels: {
      enabled: false,
    },
  
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: "#fff",
      width: 0,
      dashArray: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "20px",
              color: "#495057",
              offsetY: -4,
            },
            value: {
              show: true,
              fontSize: "18px",
              color: undefined,
              offsetY: 8,
              formatter: function (val: string) {
                return val + "%";
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "22px",
              fontWeight: 600,
              color: "#495057",
            },
          },
        },
      },
    },
  
    colors: ["var(--primary-color)", "rgb(227, 84, 212)"],
  }
  chartOptions3:any={
    series: [
      {
        type: "area",
        name: "Day Shift",
        data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
      },
      {
        type: "line",
        name: "Night Shift",
        data: [8, 40, 15, 32, 45, 30, 20, 35, 28, 43, 30, 40],
      },
    ],
    chart: {
      type: "line",
      height: 338,
      toolbar: {
        show: false,
      },
    },
    colors: ["var(--primary-color)", "rgba(227, 84, 212, 0.5)"],
    fill: {
      type: ["gradient", "solid"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "var(--primary01)",
              opacity: 50,
            },
            {
              offset: 75,
              color: "var(--primary01)",
              opacity: 0.5,
            },
            {
              offset: 100,
              color: "transparent",
              opacity: 0.5,
            },
          ],
          [
            {
              offset: 0,
              color: "rgba(158, 92, 247, 0.1)",
              opacity: 1,
            },
            {
              offset: 75,
              color: "rgba(158, 92, 247, 0.1)",
              opacity: 0.3,
            },
            {
              offset: 100,
              color: "transparent",
              opacity: 1,
            },
          ],
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "top",
      offsetX: 0,
      offsetY: 8,
      markers:{
        size:5
      }
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
      lineCap: "round",
    },
    grid: {
      borderColor: "#edeef1",
      strokeDashArray: 2,
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: "rgba(158, 92, 247, 0.05)",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "rgba(158, 92, 247, 0.05)",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
    xaxis: {
      type: "month",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
      axisBorder: {
        show: false,
        color: "rgba(158, 92, 247, 0.05)",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "rgba(158, 92, 247, 0.05)",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        rotate: -90,
      },
    },
  }
  patientColumns=[
    { header: 'Sno', field: 'Sno' },
    { header: 'Patient ID', field: 'patientID' },
    { header: 'Name', field: 'name' },
    { header: 'Gender', field: 'gender' }, 
    { header: 'Age', field: 'age' },
    { header: 'Assgined Doctor', field: 'assigneddoctor' },
    { header: 'Disease', field: 'disease' },
    { header: 'Contact Number', field: 'contactnumber' },
    { header: 'Appointmented Date', field: 'appointmentedate' },
    { header: 'Room No', field: 'roomno' },
    { header: 'Action', field: 'action' },
  ]
  doctorColumns=[
    { header: 'Doctor', field: 'doctor' },
    { header: 'Qualification', field: 'qualification' },
    { header: 'Experience', field: 'experience' },
    { header: 'Action', field: 'action' },
  ]
  patientslist=[
    {
      src:"./assets/images/faces/11.jpg",
      sno:"01",
      id:"PAC-9ABC",
      name:"Jhon Doe",
      gender:"Male",
      age:"25",
      doctor:"Dr.M.Smith",
      disease:"Hypertension",
      bg:"primary",
      contact:"123-456-7890",
      date:"2023-10-20",
      room:"101"
    },
    {
      src:"./assets/images/faces/2.jpg",
      sno:"02",
      id:"PAC-3SFW",
      name:"Jane smith",
      gender:"Female",
      age:"35",
      doctor:"Dr. Johnson",
      disease:"Diabetes",
      bg:"secondary",
      contact:"987-654-3210",
      date:"2023-09-15",
      room:"102"
    },
    {
      src:"./assets/images/faces/12.jpg",
      sno:"03",
      id:"PAC-6SKF",
      name:"Robert Jhonson",
      gender:"Male",
      age:"45",
      doctor:"Dr.M.Angle",
      disease:"Asthma",
      bg:"success",
      contact:"456-789-0123",
      date:"2023-11-05",
      room:"103"
    },
    {
      src:"./assets/images/faces/5.jpg",
      sno:"04",
      id:"PAC-3ESD",
      name:"Emiley Davis",
      gender:"Female",
      age:"28",
      doctor:"Dr.S.Mary",
      disease:"Allergies",
      bg:"orange",
      contact:"789-012-3456",
      date:"2023-08-12",
      room:"104"
    },
    {
      src:"./assets/images/faces/11.jpg",
      sno:"05",
      id:"PAC-3KSE",
      name:"William Martinez",
      gender:"Male",
      age:"38",
      doctor:"Dr.S.Mary",
      disease:"General",
      bg:"info",
      contact:"234-567-8901",
      date:"2023-12-08",
      room:"105"
    },
    {
      src:"./assets/images/faces/4.jpg",
      sno:"06",
      id:"PAC-4DFS",
      name:"Sarah Wilson",
      gender:"Female",
      age:"28",
      doctor:"Dr.T.Laytoya Thoma",
      disease:"High Cholesterol",
      bg:"warning",
      contact:"567-890-1234",
      date:"2023-07-25",
      room:"106"
    }
  ]
  doctorslist=[
    {
      id:"1",
      src:"./assets/images/faces/doctors/1.jpg",
      name:"Dr. Smith",
      specialization:"Cardiology",
      qualification:"MBBS, Ph.D",
      exp:"4"
    },
    {
      id:"2",
      src:"./assets/images/faces/doctors/2.jpg",
      name:"Dr. Johnson",
      specialization:"Orthopedics",
      qualification:"MBBS, MD,DM",
      exp:"6"
    },
    {
      id:"3",
      src:"./assets/images/faces/doctors/3.jpg",
      name:"Dr.L.Rickie Smtih",
      specialization:"Orthopedics",
      qualification:"MBBS, MD,DM",
      exp:"6"
    },
    {
      id:"4",
      src:"./assets/images/faces/doctors/4.jpg",
      name:"Dr.M.Angle",
      specialization:"Gynecologist",
      qualification:"MBBS, MD, Ph.D",
      exp:"10"
    },
    {
      id:"5",
      src:"./assets/images/faces/doctors/5.jpg",
      name:"Dr.S.Mary",
      specialization:"Neurosurgeon",
      qualification:"MBBS, MD, Ph.D",
      exp:"3"
    },
    {
      id:"6",
      src:"./assets/images/faces/doctors/6.jpg",
      name:"Dr.T.Laytoya Thoma",
      specialization:"Dermatologists",
      qualification:"MBBS, MD, Ph.D",
      exp:"5"
    }
  ]
  remove(id:string){
    const data = this.doctorslist.filter((x: { id: string }) => x.id !== id);
    this.doctorslist = data;
    }
}
