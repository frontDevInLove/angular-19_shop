import { Injectable, signal } from '@angular/core';
import { mockProduct } from '@pages/product-page/model/mocks';

export interface ProductContext {
  id: string;
  images: string[];
  title: string;
  article: string;
  price: number;
  bonus?: number;
  stock: {
    city: string;
    count: number;
    deliveryDate: string;
  }[];
}
@Injectable({ providedIn: 'root' })
export class ProductContextService {
  private readonly productSignal = signal<ProductContext | null>(null);

  /**
   * Загружает данные по ID (асинхронно)
   */
  async getProduct(id: string): Promise<ProductContext> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = { ...mockProduct, id };
        this.productSignal.set(product);
        resolve(product);
      }, 2000); // 2 секунды задержки
    });
  }

  /**
   * Возвращает текущий объект продукта
   */
  public product(): ProductContext | null {
    return this.productSignal();
  }
}
