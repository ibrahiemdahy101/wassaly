import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClinetSignUpComponent } from './clinet-sign-up/clinet-sign-up.component';
import { AddOrderComponent } from './add-order/add-order.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,AddOrderComponent, RouterModule.forChild([
      { path: "", component: ClientDashboardComponent },
      { path: "addorder", component: AddOrderComponent },
    {path:'csinup',component:ClinetSignUpComponent}])
  ]
})
export class ClientModule { }
