import { Component, computed, inject } from '@angular/core';
import { ProductContextService } from '@pages/product-page/model/product-context.service';
import { DecimalPipe, NgIf } from '@angular/common';
import { TextBlockSkeletonComponent } from '@shared/ui/text-block-skeleton/text-block-skeleton.component';
import { StockInfoComponent } from '@widgets/stock-info/stock-info.component';

@Component({
  selector: 'app-product-purchase-panel',
  imports: [DecimalPipe, NgIf, TextBlockSkeletonComponent, StockInfoComponent],
  standalone: true,
  templateUrl: './product-purchase-panel.component.html',
  styleUrl: './product-purchase-panel.component.scss',
})
export class ProductPurchasePanelComponent {
  private context = inject(ProductContextService);

  readonly product = computed(() => this.context.product());
}
