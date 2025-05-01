import { Component } from '@angular/core';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-text-block-skeleton',
  imports: [NgxSkeletonLoaderComponent],
  standalone: true,
  templateUrl: './text-block-skeleton.component.html',
  styleUrl: './text-block-skeleton.component.scss',
})
export class TextBlockSkeletonComponent {}
