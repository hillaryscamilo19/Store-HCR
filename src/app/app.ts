import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { Products } from "./features/products/products";
import { Footer } from "./layout/footer/footer/footer";
import { Navbar } from "./layout/navbar/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Products, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Store-HCR');
}
