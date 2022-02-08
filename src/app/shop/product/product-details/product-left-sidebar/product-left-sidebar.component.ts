import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/classes/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
  styleUrls: ['./product-left-sidebar.component.scss']
})
export class ProductLeftSidebarComponent implements OnInit {
  product: Product = {};
  products: Product[] = [];
  selectedSize: any = '';
  counter: number = 1;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  slideNavConfig = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    asNavFor:".product-slick"
  }

  constructor(public productsService: ProductsService, private route: ActivatedRoute,
    private router: Router, private cartService: CartService, private wishlistService: WishlistService) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.productsService.getProductById(id).subscribe(res => {
        this.product = res;
        console.log(this.product)
      });
    });
  }

  ngOnInit(): void {
    // this.productsService.getProducts().subscribe(res => {
    //   this.products = res;
    // });
  }

  increment() {
    this.counter += 1;
  }

  decement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  addToCart(product: Product, quantity: number): any {
    if (quantity == 0) {  return false;  }
    this.cartService.addToCart(product, quantity);
    
  }

  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }

  buNow(product: Product, quantity: number) {
    if (quantity > 0) {
      this.cartService.addToCart(product, quantity);
      this.router.navigate(['/home/checkout']);
    }
  }

  changeSizeVariant(size:any){

  }
}
