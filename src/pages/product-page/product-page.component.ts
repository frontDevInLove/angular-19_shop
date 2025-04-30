import { Component } from '@angular/core';
import { ProductImageSliderComponent } from '../../widgets/product-image-slider/product-image-slider.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductImageSliderComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {}
