import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/classes/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private _productService: ProductsService, private _toastr:ToastrService ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe((res:any) => {
      if (res) {
        let arr = [];
        for (const key of Object.keys(res)) { arr.push(res[key]); }
        this.products = arr
        // console.log(this.products);
      } else if (res == null) {
        this._toastr.info('No Products available', "Products Master");
        this.products = []
      } else {
        this._toastr.error('Some shit happened', "Products Master");
        this.products = []
      }
    });
  }

}
