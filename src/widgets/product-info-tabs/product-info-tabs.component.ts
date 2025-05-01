import { Component, computed, inject, Type } from '@angular/core';
import { NgComponentOutlet, NgIf } from '@angular/common';
import { ProductInfoCharacteristicComponent } from '@widgets/product-info-tabs/product-info-characteristic/product-info-characteristic.component';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { ProductContextService } from '@pages/product-page/model/product-context.service';

interface ProductTab {
  key: string;
  label: string;
  component?: Type<any>;
  text?: string;
}

@Component({
  selector: 'app-product-info-tabs',
  imports: [
    NgIf,
    NgComponentOutlet,
    DragScrollComponent,
    DragScrollItemDirective,
  ],
  standalone: true,
  templateUrl: './product-info-tabs.component.html',
  styleUrl: './product-info-tabs.component.scss',
})
export class ProductInfoTabsComponent {
  public tabs: ProductTab[] = [
    {
      key: 'description',
      label: 'Описание',
      component: ProductInfoCharacteristicComponent,
    },
    {
      key: 'characteristics',
      label: 'Характеристики',
      text: 'Характеристики товара',
    },
    { key: 'analogs', label: 'Аналоги', text: 'Информация об аналогах' },
    { key: 'related', label: 'Сопутствующие', text: 'Сопутствующие товары' },
    {
      key: 'docs',
      label: 'Тех.документация',
      text: 'Техническая документация',
    },
  ];

  public activeTab = this.tabs[0].key;

  private context = inject(ProductContextService);

  readonly isReady = computed(() => !!this.context.product());
}
