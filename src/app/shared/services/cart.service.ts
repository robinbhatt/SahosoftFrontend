
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import { CartItem } from '../classes/cart-item';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products =  JSON.parse( localStorage.getItem("cartItem") as any ) || [];
  cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor(private _toastr: ToastrService) { }

  // get Items 
  getItems(): Observable<CartItem[]> {
    return of(this.products);
  }

  // Total Amount
  getTotalAmount(): Observable<number> {
    return this.cartItems.map(() => {
      return this.products.reduce((total: number, curr: CartItem) => {
        return total + (curr.product.price as number * curr.quantity)
      },0)
    });
  }


  // Add to Cart 
  addToCart(product: Product, quantity: number): CartItem | boolean {
    let item: CartItem | boolean = false;

    // If Product Exists
    let hasItem = this.products.find((item: CartItem, index:any) => {
      if (item.product.id === product.id) {
        let qty: number = this.products[index].quantity + quantity;
        let stock = this.calculateStockCounts(this.products[index], quantity);

        if (qty != 0 && stock) {
          this.products[index]['quantity'] = qty;
          localStorage.setItem("cartItem", JSON.stringify(this.products));
          this._toastr.success("This product successfully added to cart !!", "Cart");
        }
        return true;
      } else { return false }
    });

    //If product does not exists (add new product here)
    if (!hasItem) {
      item = { product: product, quantity: quantity };
      this.products.push(item);
      localStorage.setItem("cartItem", JSON.stringify(this.products));
      this._toastr.success("This product successfully added to cart !!", "Cart");
    }

    return item;
  }

  // Update Cart
  updateCartQuantity(product: Product, quantity: number): CartItem | boolean {
    return this.products.find((item: CartItem, index:any) => {
      if (item.product.id === product.id) {
        let qty: number = this.products[index].quantity + quantity;
        let stock = this.calculateStockCounts(this.products[index], quantity);

        if (qty != 0 && stock) {
          this.products[index]['quantity'] = qty;
          localStorage.setItem("cartItem", JSON.stringify(this.products));
          this._toastr.success("This product successfully added to cart !!", "Cart");
        }
        return true;
      } else { return false }
    });
  }

  //get Stock
  calculateStockCounts(product: CartItem, quantity: number): boolean {
    let qty = product.quantity + quantity;
    let stock = product.product.stock as number;

    if (stock < qty) {
      this._toastr.error("You can add more item in cart !!", "Cart");
      return false;
    }
    return true
  }

    // Remove item from cart
    removeFromCart(product: Product) : any {
      if (product === undefined) {
        return false;
      } 
  
      let index = this.products.indexOf(product);
      this.products.splice(index, 1);
      localStorage.setItem("cartItem", JSON.stringify(this.products));
    }

    clearAllItemFromCart(){
      this.products.splice(0,this.products.length);
      localStorage.setItem("cartItem", JSON.stringify(this.products));
    }

}
