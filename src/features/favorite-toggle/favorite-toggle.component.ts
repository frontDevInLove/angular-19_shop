import { Component, signal } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { FavoriteService } from './services/favorite.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-favorite-toggle',
  imports: [IconComponent, NgClass],
  standalone: true,
  templateUrl: './favorite-toggle.component.html',
  styleUrl: './favorite-toggle.component.scss',
})
export class FavoriteToggleComponent {
  isActive = signal(false);

  constructor(private readonly favoriteService: FavoriteService) {
    this.isActive.set(this.favoriteService.get());
  }

  toggle() {
    const newValue = this.favoriteService.toggle();
    this.isActive.set(newValue);
  }
}
