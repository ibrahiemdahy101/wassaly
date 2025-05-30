import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalService } from '../../global.service';
import { Order } from '../../app/models/OrderInterface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-courier-dashboard',
  imports: [RouterLink,CommonModule],
  templateUrl: './courier-dashboard.component.html',
  styleUrls: ['./courier-dashboard.component.css']
})
export class CourierDashboardComponent {
  orders: Order[] = [];
  constructor(private servs: GlobalService) {
    this.servs.getOrders().subscribe(res => {
      this.orders = res; 
      this.orders.forEach(order => console.log(order));
    })
   };
}