import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from '../auth/pages/register/register.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';



const routes: Routes = [

    {
        path: '',
        component: RegisterComponent
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
