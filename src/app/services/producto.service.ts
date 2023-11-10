// producto.service.ts
import { Injectable } from '@angular/core';

export interface Producto {
  nombre: string;
  precios: { unidad: string; precio: number }[];
  imagen: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productos: Producto[] = [];

  getProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }
}
