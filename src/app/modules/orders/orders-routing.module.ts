import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderListComponent } from './pages/order-list/order-list.component';


const routes: Routes = [

    {
        path: '',
        component: OrderListComponent
    },
    {
        path: ':type/:id',
        component: OrderDetailsComponent
    },
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule { }
