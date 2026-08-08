import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { Products } from "./features/products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Store-HCR');
}
