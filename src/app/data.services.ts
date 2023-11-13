import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "./services/producto.service";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    cargarProductos(){

        return this.httpClient.get('https://bd-tiendavirtual-default-rtdb.firebaseio.com/datos.json');
    }


    agregarProducto(productos:Producto[]){

        this.httpClient.put('https://bd-tiendavirtual-default-rtdb.firebaseio.com/datos.json',productos).subscribe(

           Response => console.log("El Producto se ha Agregado: " + Response),
            
            error => console.log("Error: " + error), 
            
        );
    }
}