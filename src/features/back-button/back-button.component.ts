import { Component } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';

@Component({
  selector: 'app-back-button',
  imports: [IconComponent],
  standalone: true,
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss',
})
export class BackButtonComponent {}
