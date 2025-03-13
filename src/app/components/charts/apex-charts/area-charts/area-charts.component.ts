import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { series,githubData ,dataSeries, data} from './data';
import moment from 'moment';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ApexChartComponent } from '../../../../@spk/apex-chart/apex-chart.component';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-area-charts',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule,ApexChartComponent],
  templateUrl: './area-charts.component.html',
  styleUrl: './area-charts.component.scss',
})

export class AreaChartsComponent {
  public chartMonths!:any;
  public chartYears!:any;
  chartOptions6:any
  public commonOptions: any = {
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: "solid"
    },
    xaxis: {
      type: "datetime"
    },
    stroke: {
      width: 0,
      curve: "smooth"
    }
  };
  public activeOptionButton = "all";
  public updateOptionsData:any = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
   
    'all': {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };
  @ViewChild("chart", { static: false }) chart!: ChartComponent;
 
  ChartOptions:any;
  constructor(    public renderer: Renderer2,private el:ElementRef,private cdr: ChangeDetectorRef,
 private elementRef: ElementRef) {
    this.initCharts();
    this.chartOptions6= {
      series: [
        {
          name: "PRODUCT A",
          data: this.generateDataSets(0)
        },
        {
          name: "PRODUCT B",
          data: this.generateDataSets(1)
        },
        {
          name: "PRODUCT C",
          data: this.generateDataSets(2)
        }
      ],
      colors:['#5c67f7','#8761e0','#ff8e6f'],
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          enabled: false
        },
        events: {
          mounted: (chart:any) => {
            chart.windowResizeHandler();
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          style: {
            color: "#8e8da4"
          },
          offsetX: 0,
          formatter: function(val: number) {
            return (val / 1000000).toFixed(2);
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      xaxis: {
        type: "datetime",
        tickAmount: 8,
        min: new Date("01/01/2014").getTime(),
        max: new Date("01/20/2014").getTime(),
        labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: function(val: any, timestamp: string | number | Date) {
            return moment(new Date(timestamp)).format("DD MMM YYYY");
          }
        }
      },
      title: {
        text: "Irregular Data in Time Series",
        align: "left",
        offsetX: 14
      },
      tooltip: {
        shared: true
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetX: -10
      }
    };
    this.ChartOptions = {
      series: [
        {
          data: data
        }
      ],
      chart: {
        type: "area",
        height: 310,
        zoom:{
          enabled:false
        }
      },
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#999",
            label: {
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396"
              }
            }
          }
        ],
        xaxis: [
          {
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "#999",
            label: {
              text: "Rally",
              style: {
                color: "#fff",
                background: "#775DD0"
              }
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      colors:['#5c67f7'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    };
 }
  chartOptions1: any = {
    series: [
      {
        name: 'STOCK ABC',
        data: series.monthDataSeries1.prices,
      },
    ],
    colors:['#5c67f7'],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      events: {
        mounted: (chart:any) => {
          chart.windowResizeHandler();
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left',
      style: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#8c9097'
    },
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
      
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  };
  chartOptions2: any = {
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    colors:['#5c67f7','#e354d4'],
    chart: {
      height: 350,
      type: 'area',
      events: {
        mounted: (chart:any) => {
          chart.windowResizeHandler();
        }
      },
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };
  chartOptions3: any = {
    series: [
      {
        name: 'north',
        data: [
          {
            x: 1996,
            y: 322,
          },
          {
            x: 1997,
            y: 324,
          },
          {
            x: 1998,
            y: 329,
          },
          {
            x: 1999,
            y: 342,
          },
          {
            x: 2000,
            y: 348,
          },
          {
            x: 2001,
            y: 334,
          },
          {
            x: 2002,
            y: 325,
          },
          {
            x: 2003,
            y: 316,
          },
          {
            x: 2004,
            y: 318,
          },
          {
            x: 2005,
            y: 330,
          },
          {
            x: 2006,
            y: 355,
          },
          {
            x: 2007,
            y: 366,
          },
          {
            x: 2008,
            y: 337,
          },
          {
            x: 2009,
            y: 352,
          },
          {
            x: 2010,
            y: 377,
          },
          {
            x: 2011,
            y: 383,
          },
          {
            x: 2012,
            y: 344,
          },
          {
            x: 2013,
            y: 366,
          },
          {
            x: 2014,
            y: 389,
          },
          {
            x: 2015,
            y: 334,
          },
        ],
      },
      {
        name: 'south',
        data: [
          {
            x: 1996,
            y: 162,
          },
          {
            x: 1997,
            y: 90,
          },
          {
            x: 1998,
            y: 50,
          },
          {
            x: 1999,
            y: 77,
          },
          {
            x: 2000,
            y: 35,
          },
          {
            x: 2001,
            y: -45,
          },
          {
            x: 2002,
            y: -88,
          },
          {
            x: 2003,
            y: -120,
          },
          {
            x: 2004,
            y: -156,
          },
          {
            x: 2005,
            y: -123,
          },
          {
            x: 2006,
            y: -88,
          },
          {
            x: 2007,
            y: -66,
          },
          {
            x: 2008,
            y: -45,
          },
          {
            x: 2009,
            y: -29,
          },
          {
            x: 2010,
            y: -45,
          },
          {
            x: 2011,
            y: -88,
          },
          {
            x: 2012,
            y: -132,
          },
          {
            x: 2013,
            y: -146,
          },
          {
            x: 2014,
            y: -169,
          },
          {
            x: 2015,
            y: -184,
          },
        ],
      },
    ],
    colors:['#5c67f7','#e354d4'],
    chart: {
      type: 'area',
      height: 350,
      events: {
        mounted: (chart:any) => {
          chart.windowResizeHandler();
        }
      },
      zoom:{
        enabled:false
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    title: {
      text: 'Area with Negative Values',
      align: 'left',
      style: {
        fontSize: '14px',
      },
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      floating: false,

      labels: {
        style: {
          color: '#8e8da4',
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      x: {
        format: 'yyyy',
      },
      fixed: {
        enabled: false,
        position: 'topRight',
      },
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
  };
  chartOptions8: any = {
    series: [
      {
        name: 'Network',
        data: [
          {
            x: 'Dec 23 2017',
            y: null,
          },
          {
            x: 'Dec 24 2017',
            y: 44,
          },
          {
            x: 'Dec 25 2017',
            y: 31,
          },
          {
            x: 'Dec 26 2017',
            y: 38,
          },
          {
            x: 'Dec 27 2017',
            y: null,
          },
          {
            x: 'Dec 28 2017',
            y: 32,
          },
          {
            x: 'Dec 29 2017',
            y: 55,
          },
          {
            x: 'Dec 30 2017',
            y: 51,
          },
          {
            x: 'Dec 31 2017',
            y: 67,
          },
          {
            x: 'Jan 01 2018',
            y: 22,
          },
          {
            x: 'Jan 02 2018',
            y: 34,
          },
          {
            x: 'Jan 03 2018',
            y: null,
          },
          {
            x: 'Jan 04 2018',
            y: null,
          },
          {
            x: 'Jan 05 2018',
            y: 11,
          },
          {
            x: 'Jan 06 2018',
            y: 4,
          },
          {
            x: 'Jan 07 2018',
            y: 15,
          },
          {
            x: 'Jan 08 2018',
            y: null,
          },
          {
            x: 'Jan 09 2018',
            y: 9,
          },
          {
            x: 'Jan 10 2018',
            y: 34,
          },
          {
            x: 'Jan 11 2018',
            y: null,
          },
          {
            x: 'Jan 12 2018',
            y: null,
          },
          {
            x: 'Jan 13 2018',
            y: 13,
          },
          {
            x: 'Jan 14 2018',
            y: null,
          },
        ],
      },
    ],
    colors:['#5c67f7'],
    chart: {
      type: 'area',
      height: 320,
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      events: {
        mounted: (chart:any) => {
          chart.windowResizeHandler();
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    fill: {
      opacity: 0.8,
      type: 'pattern',
      pattern: {
        style: 'horizontalLines',
        width: 5,
        height: 5,
        strokeWidth: 3,
      },
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    title: {
      text: 'Network Monitoring',
    },
    tooltip: {
      intersect: true,
      shared: false,
    },
    theme: {
      palette: 'palette1',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Bytes Received',
      },
    },
  };
 
  public initCharts(): void {
    this.chartMonths = {
      series: [
        {
          name: "commits",
          data: githubData.series
        }
      ],
      colors:['#845adf'],
      chart: {
        id: "chartyear",
        type: "area",
        height: 130,
        // background: "#F6F8FA",
        toolbar: {
          show: false,
          autoSelected: "pan"
        },
       
      },
      // colors: ["#FF7F00"],

      yaxis: {
        show: false,
        tickAmount: 3
      }
    };

    this.chartYears = {
      series: [
        {
          name: "commits",
          data: githubData.series
        }
      ],
      chart: {
        height: 140,
        type: "area",
        // background: "#F6F8FA",
        toolbar: {
          autoSelected: "selection"
        },
        brush: {
          enabled: true,
          target: "chartyear"
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("26 Jan 2014").getTime(),
            max: new Date("29 Mar 2015").getTime()
          }
        }
      },
      colors: ["#5c67f7"],
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };
    this.ChartOptions = {
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6]
          ]
        }
      ],
      chart: {
        type: "area",
        height: 350
      },
   
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    };
}

public generateDataSets = function(t: number) {
  var ts1 = 1388534400000;
  var ts2 = 1388620800000;
  var ts3 = 1389052800000;

  var dataSet:any[] = [[], [], []];

  for (let i = 0; i < 12; i++) {
    ts1 = ts1 + 86400000;
    const innerArr = [ts1, dataSeries[2][i].value];
    dataSet[0].push(innerArr);
  }
  for (let i = 0; i < 18; i++) {
    ts2 = ts2 + 86400000;
    const innerArr = [ts2, dataSeries[1][i].value];
    dataSet[1].push(innerArr);
  }
  for (let i = 0; i < 12; i++) {
    ts3 = ts3 + 86400000;
    const innerArr = [ts3, dataSeries[0][i].value];
    dataSet[2].push(innerArr);
  }

  if (t === 0) {
    return dataSet[0];
  } else if (t === 1) {
    return dataSet[1];
  } else {
    return dataSet[2];
  }
};
public generateDayWiseTimeSeries = function(baseval: number, count: number, yrange: { min: any; max: any; }) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};

chartOptions5: any = {
  series: [
    {
      name: "South",
      data: this.generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60
        }
      )
    },
    {
      name: "North",
      data: this.generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 20
        }
      )
    },
    {
      name: "Central",
      data: this.generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 15
        }
      )
    }
  ],
  chart: {
    type: "area",
    height: 350,
    stacked: true,
    events: {
      selection: function(chart: any, e: { xaxis: { min: string | number | Date; }; }) {
      }
    },
    zoom:{
      enabled:false
    }
  },
  colors: ["#845adf", "#23b7ef", "#ebeeef"],
  dataLabels: {
    enabled: false
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "left"
  },
  xaxis: {
    type: "datetime"
  }
};


// public updateOptions(option: any): void {
//   this.activeOptionButton = option;
//   this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
// }



}
