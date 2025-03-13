import { Component } from "@angular/core";
import { SharedModule } from "../../../shared/sharedmodule";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ApexChartComponent } from "../../../@spk/apex-chart/apex-chart.component";
import { SpkReusableTablesComponent } from "../../../@spk/spk-reusable-tables/spk-reusable-tables.component";
import { SpkNftCardComponent } from "../../../@spk/reusable-apps/spk-nft-card/spk-nft-card.component";
import { SpkDropdownsComponent } from "../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component";


@Component({
  selector: 'app-nft',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,SpkNftCardComponent,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent],
  templateUrl: './nft.component.html',
  styleUrl: './nft.component.scss'
})
export class NftComponent {
  chartOptions:any={
    series: [
      {
          name: 'Last Year',
          type: 'line',
          data: [47, 43, 55, 55, 41, 41, 53, 42, 47, 41, 50, 35]
          // 35, 60, 41, 57, 52, 63, 41, 41, 65, 65, 53, 57
      },
      {
          name: 'This Year',
          type: 'area',
          data: [35, 60, 41, 57, 52, 63, 41, 41, 65, 65, 53, 57]
      },
  ],
  chart: {
      toolbar: {
          show: false
      },
      zoom: {
        enabled: false
      },
      height: 285,
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 7,
          bottom:0,
          left: 0,
          blur: 1,
          color: ["var(--primary-color)",  'rgb(227, 84, 212)'],
          opacity: 0.05,
        },
  },
  grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dataLabels: {
      enabled: false
  },
  stroke: {
      width: [1.5, 2],
      curve: ['smooth', 'smooth'],
      dashArray: [0, 5],
  },
  fill: {
      type: ['soild', 'gradient'],
      gradient:{
          opacityFrom: 0.23,
          opacityTo: 0.23,
          shadeIntensity: 0.3,
      },
  },
  legend: {
      show: false,
      position: 'top',
  },
  xaxis: {
      axisBorder: {
          color: '#e9e9e9',
      },
  },
  plotOptions: {
      bar: {
          columnWidth: "20%",
          borderRadius: 2
      }
  },
  colors: ["var(--primary-color)", "rgb(227, 84, 212)"],
  }
  cardData=[
    {
      id:1,
      cardClass:" overflow-hidden",
      titleClass:"card-body nft-body",
      time:" 07hrs : 33m : 45s",
      likes:"1.43k" ,
      avatarSize:"xs",
      title:"Vibrant Spec Cat NFT",
      image:"./assets/images/nft-images/10.jpg",
      image1:"./assets/images/faces/10.jpg",
      name:"Kelinnies NFT",
      value:"0.045ETH",
      mail:"@kelinnies05",
    },
    {
        id:2,
        cardClass:" overflow-hidden",
        titleClass:"card-body nft-body",
        time:" 07hrs : 33m : 45s",
        likes:"1.43k" ,
        avatarSize:"xs",
        title:"Abstract Digital Art",
        image:"./assets/images/nft-images/11.jpg",
        image1:"./assets/images/faces/11.jpg",
        name:"Manistics NFT",
        value:"0.015ETH",
        mail:"@manistics454",
      },
    {
        id:3,
        cardClass:" overflow-hidden",
        titleClass:"card-body nft-body",
        time:" 07hrs : 33m : 45s",
        likes:"1.43k" ,
        avatarSize:"xs",
        title:"Majestic Alpha Wolf",
        image:"./assets/images/nft-images/9.jpg",
        image1:"./assets/images/faces/11.jpg",
        name:"Haridar NFT ",
        value:"0.045ETH",
        mail:"@haridar687",
      },
      {
        id:4,
        cardClass:" overflow-hidden",
        titleClass:"card-body nft-body",
        time:" 07hrs : 33m : 45s",
        likes:"1.43k" ,
        avatarSize:"xs",
        title:"Radiant Blossom NFT",
        image:"./assets/images/nft-images/4.jpg",
        image1:"./assets/images/faces/12.jpg",
        name:"Mostee NFT",
        value:"0.045ETH",
        mail:"@mostee897",
      },
      {
        id:5,
        cardClass:" overflow-hidden",
        titleClass:"card-body nft-body",
        time:" 07hrs : 33m : 45s",
        likes:"1.43k" ,
        avatarSize:"xs",
        title:"Vibrant Tropical Fishes",
        image:"./assets/images/nft-images/5.jpg",
        image1:"./assets/images/faces/4.jpg",
        name:"Cheston NFT",
        value:"0.012ETH",
        mail:"@cheston541",
      },
      {
        id:6,
        cardClass:" overflow-hidden",
        titleClass:"card-body nft-body",
        time:" 07hrs : 33m : 45s",
        likes:"1.43k" ,
        avatarSize:"xs",
        title:"Ethereal Elegance NFT",
        image:"./assets/images/nft-images/6.jpg",
        image1:"./assets/images/faces/6.jpg",
        name:"Cornaote NFT",
        value:"0.025ETH",
        mail:"@Cornaote245",
      },
  ]
  topColumns=[
    { header: 'Rank', field: 'rank' },
    { header: 'Collection', field: 'collection' },
    { header: 'Volume', field: 'volume' },
    { header: '24h %', field: '24h %' },
    { header: 'Owners', field: 'owners' },
    { header: '7d %', field: '7d %' },
    { header: 'Floor Price', field: 'floorPrice' },
    { header: 'Items', field: 'items' },

  ]
  collectionslist=[
    {
      sno:"#1",
      src:"./assets/images/nft-images/9.jpg",
      name:"Starter Sense NFT",
      mail:"@irukasensei229",
      price:"2.56ETH",
      bg:"success",
      arrow:"up",
      percent:"15.2%",
      owners:"99.4K",
      bg1:"success",
      arrow1:"up",
      percent1:"3.1%",
      floorprice:"2.31ETH",
      items:"12.4K"
    },
    {
      sno:"#2",
      src:"./assets/images/nft-images/10.jpg",
      name:"Lorem Kekkei",
      mail:"@clansound209",
      price:"1.25ETH",
      bg:"success",
      arrow:"up",
      percent:"3.7%",
      owners:"22.1K",
      bg1:"danger",
      arrow1:"down",
      percent1:"0.5%",
      floorprice:"0.25ETH",
      items:"10.1K"
    },
    {
      sno:"#3",
      src:"./assets/images/nft-images/11.jpg",
      name:"NFT Uchiha",
      mail:"@sasukeuhi990",
      price:"2,092ETH",
      bg:"danger",
      arrow:"down",
      percent:"23.1%",
      owners:"55.3K",
      bg1:"success",
      arrow1:"up",
      percent1:"9.12%",
      floorprice:"2,000ETH",
      items:"52.7K"
    },
    {
      sno:"#4",
      src:"./assets/images/nft-images/12.jpg",
      name:"Lorem Ipsum Uch",
      mail:"@kakashi092",
      price:"36.25ETH",
      bg:"danger",
      arrow:"down",
      percent:"5.2%",
      owners:"66.3K",
      bg1:"danger",
      arrow1:"down",
      percent1:"4.1%",
      floorprice:"30.12ETH",
      items:"31.4K"
    }
  ]
  users = [
    {
      name: 'Meesthi Si',
      username: '@meesthi05',
      avatar: './assets/images/faces/1.jpg',
      nftImages: ['./assets/images/nft-images/3.jpg', '+2'],
      bgClass: 'primary1',
      bgClass1: 'primary3',

    },
    {
      name: 'Oorichimaru lo',
      username: '@ooro001',
      avatar: './assets/images/faces/4.jpg',
      nftImages: ['./assets/images/nft-images/11.jpg'],
      bgClass: 'primary3',
    },
    {
      name: 'Moniket Ms',
      username: '@moniket98',
      avatar: './assets/images/faces/2.jpg',
      nftImages: ['./assets/images/nft-images/5.jpg', '+1'],
      bgClass: 'primary1',
      bgClass1: 'primary1',

    },
    {
      name: 'SakuraYM',
      username: '@sakura903',
      avatar: './assets/images/faces/12.jpg',
      nftImages: ['./assets/images/nft-images/8.jpg'],
      bgClass: 'primary1',
    },
    {
      name: 'Sasuke Uchiha',
      username: '@sasuke777',
      avatar: './assets/images/faces/2.jpg',
      nftImages: ['./assets/images/nft-images/5.jpg', '+3'],
      bgClass: 'primary1',
      bgClass1: 'primary1',
    },
    {
      name: 'Tomarko Ki',
      username: '@tomarko98',
      avatar: './assets/images/faces/15.jpg',
      nftImages: ['./assets/images/nft-images/4.jpg'],
      bgClass: 'primary1',
    }
  ];
  activities = [
    {
      title: 'Auction started For',
      highlight: 'Luminous Petal',
      username: '@monisteris547',
      name: 'Monisteris',
      avatar: './assets/images/nft-images/2.jpg',
      time: '5 mins ago',
      bg:"primary"
    },
    {
      title: 'Bid placed on',
      highlight: 'Radium Radiance',
      username: '@isther457',
      name: 'Isther',
      avatar: './assets/images/nft-images/3.jpg',
      time: '2 Days ago',
      bg:"primary",
      mutedtext:"#isther457"

    },
    {
      title: 'Artwork sold to',
      highlight: '@Lanisis',
      username: '@rokonis658',
      name: 'Rokonis',
      avatar: './assets/images/nft-images/4.jpg',
      time: '3 Days ago',
      bg:"primary"
    },
    {
      title: 'New Arrivals from New one',
      highlight: '@kanith',
      username: '@kanith6589',
      name: 'Kanith',
      avatar: './assets/images/nft-images/7.jpg',
      time: '3 Days ago',
      bg:"primary1"
    },
    {
      title: 'New artwork uploaded',
      highlight: '@fister124',
      username: '@simon145',
      name: 'Simon',
      avatar: './assets/images/nft-images/5.jpg',
      time: '5 Days ago',
      bg:"primary"
    },
    {
      title: 'New collection created.',
      avatarusername: '@joviskin124',
      avatarname: 'Joviskin',
      avatar: './assets/images/nft-images/6.jpg',
      extraAvatar: './assets/images/nft-images/11.jpg',
      time: '5 Days ago',
      bg:"primary"
    }
  ];
  nftItems = [
    {
      name: 'Meesthi Si',
      username: '@meesthi03',
      avatar: './assets/images/nft-images/14.jpg',
      price: '0.05ETH',
      timeAgo: '5 mins ago',
      bidders: '99.9k Bidders',
    },
    {
      name: 'Tomarko Parizi',
      username: '@tomarko98',
      avatar: './assets/images/nft-images/15.jpg',
      price: '0.05ETH',
      timeAgo: '5 mins ago',
      bidders: '99.9k Bidders',
    },
    {
      name: 'Kazimo Aruke',
      username: '@kazimo900',
      avatar: './assets/images/nft-images/16.jpg',
      price: '0.05ETH',
      timeAgo: '5 mins ago',
      bidders: '99.9k Bidders',
    },
    {
      name: 'Oorichimaru lo',
      username: '@ooro001',
      avatar: './assets/images/nft-images/17.jpg',
      price: '0.05ETH',
      timeAgo: '5 mins ago',
      bidders: '99.9k Bidders',
    },
    {
      name: 'Sasuke Uchiha',
      username: '@sasuke777',
      avatar: './assets/images/nft-images/18.jpg',
      price: '0.05ETH',
      timeAgo: '5 mins ago',
      bidders: '99.9k Bidders',
    },
    {
      name: 'Nagiro Ohinavo',
      username: '@nagiro096',
      avatar: './assets/images/nft-images/3.jpg',
      price: '0.05ETH',
      timeAgo: '5 mins ago',
      bidders: '99.9k Bidders',
    }
  ];
}
