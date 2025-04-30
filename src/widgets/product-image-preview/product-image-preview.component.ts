import { Component } from '@angular/core';

import { BackButtonComponent } from '@features/back-button/back-button.component';
import { FavoriteToggleComponent } from '@features/favorite-toggle/favorite-toggle.component';
import { ProductImageSliderComponent } from '@widgets/product-image-slider/product-image-slider.component';

@Component({
  selector: 'app-product-image-preview',
  imports: [
    BackButtonComponent,
    FavoriteToggleComponent,
    ProductImageSliderComponent,
  ],
  standalone: true,
  templateUrl: './product-image-preview.component.html',
  styleUrl: './product-image-preview.component.scss',
})
export class ProductImagePreviewComponent {
  images = [
    '/sliders/img_1.png',
    '/sliders/img_2.jpeg',
    '/sliders/img_3.jpeg',
    '/sliders/img_4.jpeg',
    '/sliders/img_4.jpeg',
  ];
}
