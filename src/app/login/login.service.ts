import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

@Injectable()
export class LoginService{
     constructor(private router:Router){}
     token: string='';
     login(username:string, password:string, userType:string){
            firebase.auth().signInWithEmailAndPassword(username, password).then(

                Response=>{
                 firebase.auth().currentUser?.getIdToken().then(
                        token=>{
                         this.token=token;
                         this.router.navigate(['/comprador']);
                        }

                    )
                }

            )
         }
     getIdToken(){
        return this.token;
     }
}