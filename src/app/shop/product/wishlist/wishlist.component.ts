import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/classes/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlistItems: Product[] = [];

  constructor(private router: Router, private wishlistService: WishlistService, public productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.wishlistService.getProducts().subscribe(res => {
      this.wishlistItems = res;
    });
  }

  addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
    this.removeItem(product);
  }

  removeItem(product: Product) {
    this.wishlistService.removeFromWishlist(product);
  }

}
