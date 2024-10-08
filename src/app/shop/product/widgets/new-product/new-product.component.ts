import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  products: Product[] = [];

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res:any) => {  //IMPROVE
      if (res) {
        let arr = [];
        for (const key of Object.keys(res)) { arr.push(res[key]); }
        this.products = arr
      }
    });
  }

}
