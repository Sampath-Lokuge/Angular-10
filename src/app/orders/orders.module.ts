import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { routes } from './orders.routing';



@NgModule({
  declarations: [OrderListComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class OrdersModule { }
