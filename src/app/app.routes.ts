import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/pages/home/home')
        .then(m => m.Home)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/logincomponent/logincomponents/logincomponents')
        .then(m => m.Logincomponents)
  },



  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];
