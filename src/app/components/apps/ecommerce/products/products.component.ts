import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/sharedmodule';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { ShopServiceService } from '../../../../shared/services/e-commerce/shop-service.service';
import { productsType } from './products.modal';
import { SpkProductsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-products-reusable-card/spk-products-reusable-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, RouterModule, NouisliderModule, SpkProductsReusableCardComponent,SpkDropdownsComponent,
    NgbCollapseModule, FormsModule, NgbDropdownModule, MaterialModuleModule, NgbModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  // products=DATA
  public someRange: number[] = [0.00, 10000.00];
  isCollapsed = true;
  isCollapsed1 = true;
  isCollapsed3 = true;
  collapse1: any;
  productsList: productsType[];
  constructor(private router: Router, public ShopService: ShopServiceService,) {
    this.productsList = this.ShopService.getData();
  }

  ngOnInit(): void {
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
}
