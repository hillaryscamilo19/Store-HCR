import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './features/home/home';
import { Products } from './features/products/products';

export const routes: Routes = [
  {
    path: '',
    component: Layout,

    children: [
      {
        path: '',
        component: Home,
      },

      {
        path: 'products',
        component: Products,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
