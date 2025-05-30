import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Order } from '../../app/models/OrderInterface';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from '../../global.service';

@Component({
  standalone:true,
  selector: 'app-add-order',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent {
  constructor(private serv: GlobalService) { };

  orderId: number = 0;
  order: Order = {} as Order;
  form = new FormGroup({
    pickUpAdress: new FormControl('',{nonNullable:true}),
    pickUpAdressDetails: new FormControl('',{nonNullable:true}),
    deliverAdress: new FormControl('',{nonNullable:true}),
    deliveradressDetails: new FormControl('',{nonNullable:true}),
    orderDetails: new FormControl('',{nonNullable:true}),
    sugestPrice: new FormControl('',{nonNullable:true}),
    urgency: new FormControl('',{nonNullable:true})
  })

  onSubmit() {
     this.orderId+= 1;
    const {
      pickUpAdress='',
      pickUpAdressDetails='',
      deliverAdress ='',
      deliveradressDetails = '',
      orderDetails = '',
      sugestPrice = '',
      urgency='',
    } = this.form.value;

    this.order = {
      ...this.order,
      id:this.orderId,
      pickUpDetails: pickUpAdressDetails,
      pickUpLocation: pickUpAdress,
      deliverLocation: deliverAdress,
      deliverLocDetails: deliveradressDetails,
      orderDetails: orderDetails,
      suggestPrice: sugestPrice,
      urgency:urgency,
    }
    this.serv.orders.push(this.order);
    this.serv.getOrders().subscribe(res => console.log(res));
  }
}
