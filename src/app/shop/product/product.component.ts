import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | any;
  variantImage: any ;
  selectedImage: any ;

  constructor(
    private productServices: ProductsService, 
    private cartService: CartService, 
    private wishlistService: WishlistService
    ) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  changeVarientImage(image: any) {
    this.variantImage = image;
    this.selectedImage = image;
  }

  // add To cart
  addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  // add To wishlist
  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }

  // add To compare
  addToCompare(product: Product) {
    this.productServices.addToCompare(product);
  }

  
}
