import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../classes/order';
// import { Order } from '../classess/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private OrderDetails: Order;

  constructor(private router: Router) { }

  createOrder(product: any, details: any, orderId: any, paymentDate: any, expectedDate: any, amount: any) {
    let item: Order = {
         product:product,
          shippingDetails:details,
         orderId:orderId,
       paymentDate:paymentDate,
      expectedDate:expectedDate,
     totalAmount:amount
    };

    this.OrderDetails = item;
    this.router.navigate(['/home/checkout/success']);
  }

  getOrderItems() : Order {
    return this.OrderDetails;
  }

}
