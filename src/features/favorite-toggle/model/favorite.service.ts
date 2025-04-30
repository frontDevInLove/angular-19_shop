import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private readonly key = 'isFavorite';

  /**
   * Получает значение "избранного" из localStorage.
   */
  get(): boolean {
    return localStorage.getItem(this.key) === 'true';
  }

  /**
   * Устанавливает новое значение "избранного" в localStorage.
   * @param value новое значение
   */
  set(value: boolean): void {
    localStorage.setItem(this.key, String(value));
  }

  /**
   * Переключает значение и возвращает новое состояние.
   */
  toggle(): boolean {
    const current = this.get();
    const next = !current;
    this.set(next);
    return next;
  }
}
