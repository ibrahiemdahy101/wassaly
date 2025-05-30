import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalService } from '../../global.service';
import { Order } from '../../app/models/OrderInterface';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-client-dashboard',
  imports: [RouterLink,CommonModule],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent {
  orderss: Order[] = [];
  constructor(private service: GlobalService) { 
    this.service.getOrders().subscribe(res => 
    {
      this.orderss = Object.values(res); 
      this.orderss.forEach(order=>console.log(order))
    })
    }
  }
  
