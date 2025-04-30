import { Component } from '@angular/core';
import { ProductImagePreviewComponent } from '@widgets/product-image-preview/product-image-preview.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductImagePreviewComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {}
