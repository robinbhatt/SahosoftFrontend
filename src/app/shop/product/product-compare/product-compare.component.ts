import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.scss']
})
export class ProductCompareComponent implements OnInit {

  products: Product[] = [];

  constructor(public productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getCompareProducts().subscribe(res => {
      this.products = res;
    });
  }

  // Add to Cart
  addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  //Remove Item
  removeItem(product: Product) {
    this.productsService.removeFromCompare(product);
  }

}
