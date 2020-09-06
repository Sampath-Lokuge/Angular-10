import { Routes } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';





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
