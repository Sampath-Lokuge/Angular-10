import { Routes } from '@angular/router';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

export const routes: Routes = [

    {
        path: '',
        component: OrderListComponent
    },
    {
        path: ':type/:id',
        component: OrderDetailsComponent
    },
];
