import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  products = JSON.parse(localStorage.getItem("wishlistItem") as string) || [];

  constructor(private _toastr: ToastrService) { }

  // get Products 
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  // Check if item is allready added in wishlist
  hasProducts(product: Product): boolean {
    //let item = this.products.find(item => item.id === product.id);
    let item = this.products.find((item: Product) => item.id === product.id);
    return item !== undefined;
  }

  // Add to wishlist
  addToWishlist(product: Product) {
    if (!this.hasProducts(product)) {
      this.products.push(product);
      localStorage.setItem("wishlistItem", JSON.stringify(this.products));
      this._toastr.success("This product successfully added to wishlist", "Wishlist");
    } else {
      this._toastr.error("This product already added to wishlist", "Wishlist");
    }
  }

  // Remove item from wishlist
  removeFromWishlist(product: Product) :any {
    if (product === undefined) {
      return false;
    }

    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
    localStorage.setItem("wishlistItem", JSON.stringify(this.products));
  }

}
