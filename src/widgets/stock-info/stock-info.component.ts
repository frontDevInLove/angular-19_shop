import { Component, Input } from '@angular/core';
import { CartBtnComponent } from '@features/cart-btn/cart-btn.component';
import { StockInfo } from '@pages/product-page/model/product-context.service';

@Component({
  selector: 'app-stock-info',
  imports: [CartBtnComponent],
  standalone: true,
  templateUrl: './stock-info.component.html',
  styleUrl: './stock-info.component.scss',
})
export class StockInfoComponent {
  @Input() info!: StockInfo;
}
