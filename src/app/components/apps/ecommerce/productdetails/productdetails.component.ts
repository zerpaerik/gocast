import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition,GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import Swiper from 'swiper'
import { register as registerSwiperElements } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProductdetailsService } from '../../../../shared/services/e-commerce/productdetails.service';
import { ShopServiceService } from '../../../../shared/services/e-commerce/shop-service.service';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SwiperComponent } from '../../../../@spk/spk-reusable-plugins/swiper/swiper.component';
import { SpkProductsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-products-reusable-card/spk-products-reusable-card.component';
import { SpkGalleryComponent } from '../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
Swiper.use([Autoplay, Navigation, Pagination]);
registerSwiperElements();
const data = [
  {
    srcUrl: './assets/images/ecommerce/png/1.png',
    previewUrl: './assets/images/ecommerce/png/2.png',
    previewUrl1: './assets/images/ecommerce/png/3.png',
    previewUrl2: './assets/images/ecommerce/png/4.png',
    previewUrl4: './assets/images/ecommerce/png/5.png',
  },
]
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [SharedModule,RouterModule,GalleryModule,NgbModule,SpkGalleryComponent,
    LightboxModule,SpkReusableTablesComponent,SpkProductsReusableCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
  imageData = data;
  items!: GalleryItem[];

  quantity: number = 1;
  product: number = 1;
  increase() {
    this.product++;
  }

  decrease() {
    if (this.product >0) {
      this.product--;
    }
  }
  products = [
    {
      id: 1,
      title: "Lightweight Sneakers",
      price: "$771",
      originalPrice: "$880",
      imageUrl: "./assets/images/ecommerce/png/28.png",
      discount: "12% Off",
      color1: "primary3",
      ratingsCount: 874,
      series: "Stealth Series",
      trending: true,
      color: "info"
    },
    {
      id: 2,
      title: "Kids' Party Wear Frock",
      price: "$236",
      originalPrice: "$267",
      imageUrl: "./assets/images/ecommerce/png/12.png",
      discount: "15% Off",
      color1: "info",
      ratingsCount: 231,
      series: "Twinkle Twirl",
    },
    {
      id: 3,
      title: "Ladies' Slim Bag",
      price: "$124",
      originalPrice: "$105",
      imageUrl: "./assets/images/ecommerce/png/29.png",
      discount: "24% Off",
      color1: "primary1",
      ratingsCount: 110,
      series: "Sleek Elegance",
    },
    {
      id: 4,
      title: "Elegant Flower Pot",
      price: "$314",
      originalPrice: "$547",
      imageUrl: "./assets/images/ecommerce/png/14.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "Serene Garden",
    },
    {
      id: 5,
      title: "Trendy Sunglasses",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/11.png",
      discount: "10% Off",
      color1: "primary1",
      ratingsCount: 514,
      series: "Crystal Clear",
    },
    {
      id: 6,
      title: "Sleek Modern Chair",
      price: "$314",
      originalPrice: "$547",
      imageUrl: "./assets/images/ecommerce/png/13.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "Artisanal Comfort",
    },
    {
      id: 7,
      title: "Advanced Smartwatch",
      price: "$354",
      originalPrice: "$455",
      imageUrl: "./assets/images/ecommerce/png/23.png",
      discount: "15% Off",
      color1: "warning",
      ratingsCount: 225,
      series: "SmartSync 2024",
      trending: true,
      color: "danger"
    },
    {
      id: 8,
      title: "Classic T-shirt",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/10.png",
      discount: "50% Off",
      color1: "danger",
      ratingsCount: 142,
      series: "Casual Everyday",
    },
    {
      id: 9,
      title: "Versatile Hoodie",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/9.png",
      discount: "15% Off",
      color1: "info",
      ratingsCount: 142,
      series: "Urban Flex",
    },
    {
      id: 10,
      title: "Wireless Headphones",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/30.png",
      discount: "21% Off",
      color1: "primary2",
      ratingsCount: 142,
      series: "SoundWave",
    },
    {
      id: 11,
      title: "Wireless Earbuds",
      price: "$314",
      originalPrice: "$547",
      imageUrl: "./assets/images/ecommerce/png/31.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "AirPods Max",
    },
    {
      id: 12,
      title: "Trendy Sunglasses",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/11.png",
      discount: "10% Off",
      color1: "primary1",
      ratingsCount: 514,
      series: "Crystal Clear",
    },


  ];
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1', { static: false }) swiperContainer1!: ElementRef;
  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 20 },
    320: { slidesPerView: 1, spaceBetween: 20 },
    500: { slidesPerView: 2, spaceBetween: 20 },
    1020: { slidesPerView: 3, spaceBetween: 20 },
    1400: { slidesPerView: 4, spaceBetween: 20 },
  };
  ngAfterViewInit(): void {
    if (this.swiperContainer) {
      const swiperEl = this.swiperContainer.nativeElement;
      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          1110: { slidesPerView: 1, spaceBetween: 20 },
          1300: { slidesPerView: 1, spaceBetween: 20 },
        },
      });
    }
  
    if (this.swiperContainer1) {
      const swiperE2 = this.swiperContainer1.nativeElement;
      Object.assign(swiperE2, {
        slidesPerView: 1,
        spaceBetween: 10,
       
        navigation: true,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 20 },
          320: { slidesPerView: 1, spaceBetween: 20 },
          500: { slidesPerView: 2, spaceBetween: 20 },
          1020: { slidesPerView: 3, spaceBetween: 20 },
          1400: { slidesPerView: 4, spaceBetween: 20 },
        },
      });
    }
  }
  // active = 1;

// public data:any
// public posts:any
active = 1;

public data:any
public posts:any
  constructor(private shopService: ShopServiceService, private productService: ProductdetailsService, private route: ActivatedRoute,public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      this.productService.emitProductId(location.pathname);
    }
    if (this.route.snapshot.params['id'] == undefined){
      this.data =[ {
        id: '2',
        photo: './assets/images/products/item1.png',
        name: 'Trending Half Hands Tshirt (Best Fabric Premium made T-shirt for Casual wear.)',
        offer_price: 299 ,
        price: 599,
      }]
    }
    else{
      this.data = this.shopService.getData().filter(post => post.id == this.route.snapshot.params['id']);
    }

    // console.log(this.data)
   // Creat gallery items
   this.items = this.imageData.map(
    (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  );

  /** Lightbox Example */

  // Get a lightbox gallery ref
  const lightboxRef = this.gallery.ref('lightbox');

  // Add custom gallery config to the lightbox (optional)
  lightboxRef.setConfig({
    imageSize: ImageSize.Cover,
    thumbPosition: ThumbnailsPosition.Top,
  });

  // Load items into the lightbox gallery ref
  lightboxRef.load(this.items);
  }
  productSpecs = [
    { label: 'Brand', value: 'TechPro' },
    { label: 'Model Name', value: 'X15 Elite - 2024 Edition' },
    { label: 'Display', value: '15.6" 4K UHD Touchscreen' },
    { label: 'Processor', value: 'Intel Core i7' },
    { label: 'Operating System', value: 'Windows 10 Home' }
  ];
  similarProducts = [
    {
      name: "Ladies' Slim Bag",
      imageUrl: './assets/images/ecommerce/png/29.png',
      rating: 4.3,
      reviews: '16K',
      price: '$1,099',
      oldPrice: '$1,759'
    },
    {
      name: 'Wireless Headphones',
      imageUrl: './assets/images/ecommerce/png/30.png',
      rating: 4.3,
      reviews: '5K',
      price: '$799',
      oldPrice: '$1,299'
    },
    {
      name: 'Wireless Earbuds',
      imageUrl: './assets/images/ecommerce/png/31.png',
      rating: 4.3,
      reviews: '2K',
      price: '$1,499',
      oldPrice: '$2,599'
    },
    {
      name: 'Voluptatem Alarm Clock',
      imageUrl: './assets/images/ecommerce/png/32.png',
      rating: 4.3,
      reviews: '12K',
      price: '$2,299',
      oldPrice: '$3,299'
    },
    {
      name: 'Light weight Sneakers',
      imageUrl: './assets/images/ecommerce/png/28.png',
      rating: 4.3,
      reviews: '12K',
      price: '$899',
      oldPrice: '$1,299'
    }
  ];
}
