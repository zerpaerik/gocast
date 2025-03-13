import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { MatCommonModule } from '@angular/material/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from '../../../../@spk/apex-chart/apex-chart.component';

@Component({
  selector: 'app-range-area-charts',
  standalone: true,
  imports: [MatCommonModule,SharedModule,ApexChartComponent],
  templateUrl: './range-area-charts.component.html',
  styleUrl: './range-area-charts.component.scss'
})
export class RangeAreaChartsComponent {
  chartOptions1:any
  chartOptions:any
  constructor(){
    this.chartOptions = {
      series: [
        {
          name: "New York Temperature",
          data: [
            {
              x: "Jan",
              y: [-2, 4]
            },
            {
              x: "Feb",
              y: [-1, 6]
            },
            {
              x: "Mar",
              y: [3, 10]
            },
            {
              x: "Apr",
              y: [8, 16]
            },
            {
              x: "May",
              y: [13, 22]
            },
            {
              x: "Jun",
              y: [18, 26]
            },
            {
              x: "Jul",
              y: [21, 29]
            },
            {
              x: "Aug",
              y: [21, 28]
            },
            {
              x: "Sep",
              y: [17, 24]
            },
            {
              x: "Oct",
              y: [11, 18]
            },
            {
              x: "Nov",
              y: [6, 12]
            },
            {
              x: "Dec",
              y: [1, 7]
            }
          ]
        }
      ],
      colors:['#5c67f7', '#e354d4'],
      chart: {
        height: 350,
        type: "rangeArea"
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "New York Temperature (all year round)",
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
      },
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          formatter: (val: string) => {
            return val + "°C";
          }
        }
      }
    };
    this.chartOptions1 = {
      series: [
        {
          type: "rangeArea",
          name: "Team B Range",

          data: [
            {
              x: "Jan",
              y: [1100, 1900]
            },
            {
              x: "Feb",
              y: [1200, 1800]
            },
            {
              x: "Mar",
              y: [900, 2900]
            },
            {
              x: "Apr",
              y: [1400, 2700]
            },
            {
              x: "May",
              y: [2600, 3900]
            },
            {
              x: "Jun",
              y: [500, 1700]
            },
            {
              x: "Jul",
              y: [1900, 2300]
            },
            {
              x: "Aug",
              y: [1000, 1500]
            }
          ]
        },

        {
          type: "rangeArea",
          name: "Team A Range",
          data: [
            {
              x: "Jan",
              y: [3100, 3400]
            },
            {
              x: "Feb",
              y: [4200, 5200]
            },
            {
              x: "Mar",
              y: [3900, 4900]
            },
            {
              x: "Apr",
              y: [3400, 3900]
            },
            {
              x: "May",
              y: [5100, 5900]
            },
            {
              x: "Jun",
              y: [5400, 6700]
            },
            {
              x: "Jul",
              y: [4300, 4600]
            },
            {
              x: "Aug",
              y: [2100, 2900]
            }
          ]
        },

        {
          type: "line",
          name: "Team B Median",
          data: [
            {
              x: "Jan",
              y: 1500
            },
            {
              x: "Feb",
              y: 1700
            },
            {
              x: "Mar",
              y: 1900
            },
            {
              x: "Apr",
              y: 2200
            },
            {
              x: "May",
              y: 3000
            },
            {
              x: "Jun",
              y: 1000
            },
            {
              x: "Jul",
              y: 2100
            },
            {
              x: "Aug",
              y: 1200
            },
            {
              x: "Sep",
              y: 1800
            },
            {
              x: "Oct",
              y: 2000
            }
          ]
        },
        {
          type: "line",
          name: "Team A Median",
          data: [
            {
              x: "Jan",
              y: 3300
            },
            {
              x: "Feb",
              y: 4900
            },
            {
              x: "Mar",
              y: 4300
            },
            {
              x: "Apr",
              y: 3700
            },
            {
              x: "May",
              y: 5500
            },
            {
              x: "Jun",
              y: 5900
            },
            {
              x: "Jul",
              y: 4500
            },
            {
              x: "Aug",
              y: 2400
            },
            {
              x: "Sep",
              y: 2100
            },
            {
              x: "Oct",
              y: 1500
            }
          ]
        }
      ],
      // colors:[],
      chart: {
        height: 350,
        type: "rangeArea",
        animations: {
          speed: 500
        }
      },
      colors: ['#5c67f7', '#e354d4', '#5c67f7', '#e354d4'],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1]
      },
      forecastDataPoints: {
        count: 2,
        dashArray: 4
      },
      stroke: {
        curve: "straight",
        width: [0, 0, 2, 2]
      },
      legend: {
        show: true,
        customLegendItems: ["Team B", "Team A"],
        inverseOrder: true
      },
      title: {
        text: "Range Area with Forecast Line (Combo)"
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      }
    };
  }

}
