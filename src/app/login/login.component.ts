// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  userType: string = '';

  loginFormSubmit(): void {
    // Lógica para manejar el envío del formulario aquí
    console.log('Formulario enviado');
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    console.log('Tipo de Usuario:', this.userType);
  }
}
