import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images = [
    'assets/reception.jpg',
    'assets/reception.jpg',
    'assets/reception.jpg',
    'assets/reception.jpg',
    'assets/reception.jpg',
  ];

  currentImageIndex = 0;

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  showPreviousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.images.length - 1;
    }
  }

  setCurrentImageIndex(index: number) {
    this.currentImageIndex = index;
  }
  
}
