import { Component, OnInit } from '@angular/core';
import { ProductImagePreviewComponent } from '@widgets/product-image-preview/product-image-preview.component';
import { ActivatedRoute } from '@angular/router';
import { ProductContextService } from '@pages/product-page/model/product-context.service';
import { ProductPurchasePanelComponent } from '@widgets/product-purchase-panel/product-purchase-panel.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductImagePreviewComponent, ProductPurchasePanelComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private context: ProductContextService,
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';
    await this.context.getProduct(id);
  }
}
