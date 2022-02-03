import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { Global } from '../global';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currency: string = 'INR';
  products = JSON.parse(localStorage.getItem("compareItem") as string) || [];

  constructor(private _dataService: DataService, private _toastr: ToastrService) { }

  private allProducts(): Observable<Product[]> {
    let data = this._dataService.get(Global.FireBase_BASE_API_PATH + "ProductMaster/GetAll.json");
    return data;
  }

  //get Products
  getProducts() {
    return this.allProducts();
  }

  // get product by id
  getProduct(id: number): Observable<Product> {
    return this.allProducts().map(items => items.find(item => item.id === id)) as Observable<Product>;
  }

  // get products by category
  getProductByCategory(category: string): Observable<Product[]> {
    return this.allProducts().map(items => items.filter((item: Product) => {
      if (category == "all") {
        return true;
      } else {
        return item.category === category;
      }
    }));
  }

  // get compare Products 
  getCompareProducts(): Observable<Product[]> {
    return of(this.products);
  }

  // Check if item is allready added in compare list
  hasProducts(product: Product): boolean {
    let item = this.products.find((item: Product) => item.id === product.id);
    return item !== undefined;
  }

  // Add to Compare List
  addToCompare(product: Product) {
    if (!this.hasProducts(product)) {
      if (this.products.length < 4) {
        this.products.push(product);
        localStorage.setItem("compareItem", JSON.stringify(this.products));
      } else {
        this._toastr.error("You can add maximum 4 products are in compare", "Compare List");
      }
    }
  }

  // Remove item from compare
  removeFromCompare(product: Product) : any {
    if (product === undefined) {
      return false;
    }

    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
    localStorage.setItem("compareItem", JSON.stringify(this.products));
  }

}
