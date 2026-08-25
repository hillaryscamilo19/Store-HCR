import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
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

}