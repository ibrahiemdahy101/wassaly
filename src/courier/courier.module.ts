import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CourierDashboardComponent } from './courier-dashboard/courier-dashboard.component';
import { CourierSignUpComponent } from './courier-sign-up/courier-sign-up.component';


@NgModule({
  declarations: [
],
  imports: [RouterModule.forChild([
    { path: 'dashboard', component: CourierDashboardComponent },
    { path: 'corsin', component: CourierSignUpComponent }]),
    CommonModule,CourierDashboardComponent, CourierSignUpComponent,

  ],
  exports:[CourierDashboardComponent,CourierSignUpComponent]
})
export class CourierModule { }
