// comprador.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule
import { Producto, ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.css']
})
export class CompradorComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    // Obtener la lista de productos desde el servicio
    this.productos = this.productoService.getProductos();
  }

  agregarAlCarrito(producto: Producto): void {
    // Lógica para agregar el producto al carrito (puedes implementarla según tus necesidades)
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  }
}
