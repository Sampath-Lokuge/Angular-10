import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';



export const AuthRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

];
