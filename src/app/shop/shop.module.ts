import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { LogoComponent } from './home/logo/logo.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { BrandComponent } from './product/collection/filter/brand/brand.component';
import { ColorComponent } from './product/collection/filter/color/color.component';
import { PriceComponent } from './product/collection/filter/price/price.component';
import { ProductLeftSidebarComponent } from './product/product-details/product-left-sidebar/product-left-sidebar.component';
import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { SuccessComponent } from './product/product-details/success/success.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';


@NgModule({
  declarations: [
    HomeComponent,
    CollectionBannerComponent,
    LogoComponent,
    ParallaxBannerComponent,
    ProductSliderComponent,
    ProductTabComponent,
    SliderComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ProductCompareComponent,
    CollectionLeftSidebarComponent,
    BrandComponent,
    ColorComponent,
    PriceComponent,
    ProductLeftSidebarComponent,
    SidebarComponent,
    SuccessComponent,
    CategoriesComponent,
    NewProductComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
