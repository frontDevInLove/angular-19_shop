import { Component, computed, inject } from '@angular/core';

import { BackButtonComponent } from '@features/back-button/back-button.component';
import { FavoriteToggleComponent } from '@features/favorite-toggle/favorite-toggle.component';
import { ProductImageSliderComponent } from '@widgets/product-image-slider/product-image-slider.component';
import { ProductContextService } from '@pages/product-page/model/product-context.service';
import { NgIf } from '@angular/common';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-product-image-preview',
  imports: [
    BackButtonComponent,
    FavoriteToggleComponent,
    ProductImageSliderComponent,
    NgIf,
    NgxSkeletonLoaderComponent,
  ],
  standalone: true,
  templateUrl: './product-image-preview.component.html',
  styleUrl: './product-image-preview.component.scss',
})
export class ProductImagePreviewComponent {
  private context = inject(ProductContextService);

  readonly images = computed(() => this.context.product()?.images ?? []);
}
