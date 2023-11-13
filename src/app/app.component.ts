// app.component.ts
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  title = 'mi-tienda-agricola';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCsVtZzZCvkWeyIPF3Bs9uN_c-wGt_fHRY",
      authDomain: "bd-tiendavirtual.com",

    });
  }
}
