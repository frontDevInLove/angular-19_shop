import { Component, computed, inject } from '@angular/core';
import { ProductContextService } from '@pages/product-page/model/product-context.service';

@Component({
  selector: 'app-product-info-characteristic',
  imports: [],
  standalone: true,
  templateUrl: './product-info-characteristic.component.html',
  styleUrl: './product-info-characteristic.component.scss',
})
export class ProductInfoCharacteristicComponent {
  private context = inject(ProductContextService);

  readonly specs = computed(() => this.context.product()!.specs);
}
