import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'catalog/1',
        pathMatch: 'full',
      },
      {
        path: 'catalog',
        redirectTo: 'catalog/1',
        pathMatch: 'full',
      },
      {
        path: 'catalog/:id',
        loadComponent: () =>
          import('@pages/product-page/product-page.component').then(
            (m) => m.ProductPageComponent,
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('@pages/orders/orders.component').then(
            (m) => m.OrdersComponent,
          ),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('@pages/news/news.component').then((m) => m.NewsComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('@pages/cart/cart.component').then((m) => m.CartComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('@pages/profile/profile.component').then(
            (m) => m.ProfileComponent,
          ),
      },
    ],
  },
];
