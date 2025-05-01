import { Component, Input, signal } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cart-btn',
  imports: [IconComponent, NgIf],
  standalone: true,
  templateUrl: './cart-btn.component.html',
  styleUrl: './cart-btn.component.scss',
})
export class CartBtnComponent {
  /**
   * Лимит на кол-во
   */
  @Input() limit: number | null = null;

  // Сигнал количества товара в корзине (0 - не добавлен)
  readonly quantity = signal(0);

  /**
   * Добавить товар в корзину (начальное нажатие)
   */
  addToCart() {
    this.quantity.set(1);
  }

  /**
   * Увеличить количество
   */
  increment() {
    this.quantity.update((q) => {
      const res = q + 1;

      if (this.limit) {
        return res > this.limit ? this.limit : res;
      }
      return res;
    });
  }

  /**
   * Уменьшить количество
   */
  decrement() {
    const newQuantity = this.quantity() - 1;
    this.quantity.set(newQuantity);

    // Если стало 0 — удаляем из корзины
    if (newQuantity <= 0) {
      this.quantity.set(0);
    }
  }

  /**
   * Проверка, добавлен ли товар в корзину
   */
  inCart() {
    return this.quantity() > 0;
  }
}
