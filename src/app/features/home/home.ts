import { Component, signal } from '@angular/core';
import { Hero, Slide } from './components/hero/hero';
import { Navbar } from "../../layout/navbar/navbar/navbar";
import { Footer } from "../../layout/footer/footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Hero, Navbar, Footer, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
