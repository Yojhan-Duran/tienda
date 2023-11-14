import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

@Injectable()
 
export class LoginService {
  Token: string | undefined;
  
  constructor(private router: Router) {}



  login(username: string, password: string, userType: string) {
    
    firebase.auth().signInWithEmailAndPassword(username, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.Token = token;
            this.router.navigate(['/']);
          }
        ).catch(
          error => {
            console.error('Error al obtener el token:', error);
          
          }
        );
      }
    ).catch(
      error => {
        console.error('Error al iniciar sesión:', error);
       
      }
    );
  }

  getIdToken() {
    return this.Token;
  }
}
