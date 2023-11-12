// producto.service.ts
import { Injectable } from '@angular/core';
import { DataServices } from '@app/data.services';

export interface Producto {
  nombre: string;
  precios: { unidad: string; precio: number }[];
  imagen: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  constructor(private dataService:DataServices){

  }

  obtenerProductos(){

    return this.dataService.cargarProductos();
  }

  private productos: Producto[] = [];

  getProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    this.dataService.agregarProducto(this.productos); 
  }
}
