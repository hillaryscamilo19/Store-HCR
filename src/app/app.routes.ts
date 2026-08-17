import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Logincomponent } from './features/auth/login/logincomponent/logincomponent';
import { authGuard } from './core/guards/auth-guard';
import { Dashboardcomponent } from './features/dashboard/pages/dashboard/dashboardcomponent/dashboardcomponent';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'login',
    component: Logincomponent
  },

  {
    path: 'dashboard',
    component: Dashboardcomponent,
    canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: 'home'
  }

];