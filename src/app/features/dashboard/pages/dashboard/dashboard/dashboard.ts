import { Component, signal } from '@angular/core';

export interface Slide {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  slides: Slide[] = [
    {
      image: '../assets/images/dress1.png',
      name: 'Casual Jacket',
      price: 125,
      oldPrice: 225
    },
    {
      image: '../assets/images/dress2.png',
      name: 'Black Jacket',
      price: 150,
      oldPrice: 250
    },
    {
      image: '../assets/images/dress3.png',
      name: 'Pink Jacket',
      price: 135,
      oldPrice: 220
    }
  ];

  currentSlide = signal(0);

  nextSlide(): void {
    this.currentSlide.update(current =>
      (current + 1) % this.slides.length
    );
  }

  previousSlide(): void {
    this.currentSlide.update(current =>
      current === 0
        ? this.slides.length - 1
        : current - 1
    );
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }


}
