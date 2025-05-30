import { Injectable } from '@angular/core';
import { Order } from './app/models/OrderInterface';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  orders: Order[] = [];
  constructor() { }
  getOrders(): Observable<Order[]>{
    let orderId = 0;
    this.orders.forEach(order=>order.id=++orderId)
    return of(this.orders)
  }
}
