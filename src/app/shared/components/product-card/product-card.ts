import { Component, input, output } from '@angular/core';
import { Producto } from '../../../features/productos/models/producto.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  producto = input.required<Producto>();
  verProducto = output<number>();
  agregarCarrito = output<Producto>();

  onVerProducto(): void {
    this.verProducto.emit(this.producto().id);
  }

  onAgregarCarrito(): void {
    this.agregarCarrito.emit(this.producto());
  }
}
