import { Component, Input } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination } from 'swiper';
import { NgForOf } from '@angular/common';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-product-image-slider',
  standalone: true,
  imports: [SwiperModule, NgForOf],
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.scss'],
})
export class ProductImageSliderComponent {
  @Input() images: string[] = [];
}
