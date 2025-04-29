import { Component } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [InlineSVGModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  /**
   * Массив навигационных пунктов
   */
  public navItems = [
    { label: 'Каталог', icon: 'icon-catalog.svg', link: '/' },
    { label: 'Заказы', icon: 'icon-orders.svg', link: '/orders' },
    { label: 'Новости', icon: 'icon-news.svg', link: '/news' },
    { label: 'Корзина', icon: 'icon-cart.svg', link: '/cart' },
    { label: 'Профиль', icon: 'icon-profile.svg', link: '/profile' },
  ];
}
