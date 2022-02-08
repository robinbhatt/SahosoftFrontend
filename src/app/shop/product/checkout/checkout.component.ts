import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/classes/cart-item';
import { Global } from 'src/app/shared/global';
import { CartService } from 'src/app/shared/services/cart.service';
import { DataService } from 'src/app/shared/services/data.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  checkoutForm: FormGroup;
  checkOutItems: CartItem[] = [];
  orderDetails: any[] = [];
  amount: number;
  totalAmount: number;
  shippingAmount: number = 40;

  constructor(public productsService: ProductsService, private _dataService: DataService, private _fb: FormBuilder, private _toastr: ToastrService,
    private cartService: CartService, private orderService: OrderService) { }

  createRegForm() {
    this.checkoutForm = this._fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
      amount: [0]
    });
  }


  ngOnInit() {
    this.createRegForm();
    this.cartService.getItems().subscribe(res => {
      this.checkOutItems = res;
    });

    this.getTotal().subscribe(res => {
      this.amount = res;
      this.totalAmount = res + this.shippingAmount;
    });
  }

  getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  onSubmit(formData: any) {
    if (this.checkoutForm.invalid) {
      return;
    }

    let allItems = [];
    for (let i = 0; i < this.checkOutItems.length; i++) {
      allItems[i] = {
        ProductId: this.checkOutItems[i].product.id,
        Quantity: this.checkOutItems[i].quantity,
        price : this.checkOutItems[i].product.price,
        Discount : this.checkOutItems[i].product.discount
      };
    }

    let obj = {
      id: 0,
      firstname: formData.value.firstname,
      lastname: formData.value.lastname,
      phone: formData.value.phone,
      email: formData.value.email,
      address: formData.value.address,
      country: formData.value.country,
      town: formData.value.town,
      state: formData.value.state,
      postalcode: formData.value.postalcode,
      amount: this.amount,
      shippingAmount: 40,
      paymentTypeId: 1,
      items: allItems,
      payment: null
    }

    // this._dataService.post(Global.FireBase_BASE_API_PATH + "PaymentMaster/Save/", obj).subscribe(objdata => {
    //   if (objdata) {
    //     this._toastr.success("Payment done successfully!", "Payment Master");
    //   } else {
    //     this._toastr.error(objdata.errors[0], "Payment Master");
    //   }
    // });

  }

}
