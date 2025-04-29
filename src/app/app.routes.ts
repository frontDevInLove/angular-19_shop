import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/product-page/product-page.component').then(
            (m) => m.ProductPageComponent,
          ),
      },
    ],
  },
];
