import { Component, Input } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-icon',
  imports: [InlineSVGModule],
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  /**
   * Путь к SVG-файлу, относительно папки `assets/icons/`.
   * Пример: `'icon-cart.svg'`
   */
  @Input() icon!: string;

  /**
   * Размер иконки в пикселях (ширина и высота).
   * Значение по умолчанию: `32`
   */
  @Input() size: number = 32;

  /**
   * Дополнительные CSS-классы, которые применяются к контейнеру иконки.
   */
  @Input() className: string = '';

  /**
   * Управляет атрибутом `aria-hidden`.
   * Если `true`, иконка будет скрыта от assistive-технологий.
   */
  @Input() ariaHidden: boolean = true;
}
