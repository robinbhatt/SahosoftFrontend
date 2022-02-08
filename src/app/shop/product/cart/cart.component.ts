import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/classes/cart-item';
import { Product } from 'src/app/shared/classes/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingCartItems: CartItem[] = [];

  constructor(private cartService: CartService, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe(res => {
      this.shoppingCartItems = res;
    });
  }

  // Increase Product Quantity
  increase(product: Product, quantity: number = 1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  // Decrease Product Quantity
  decrease(product: Product, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  // Remove cart Item
  removeItem(item: CartItem | any) {
    this.cartService.removeFromCart(item);
  }


  // Total Price
  getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }
}
