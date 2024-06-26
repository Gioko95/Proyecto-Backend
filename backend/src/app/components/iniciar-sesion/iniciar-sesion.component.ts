import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { Usuarios } from "../../interfaces/usuarios";

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})

export class IniciarSesionComponent {
  formularioCredenciales = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl(""),
  })
  manejarEnvio(){
    console.log("credenciales: ", this.formularioCredenciales.value);
  }
  usuario: Usuarios = {
    id: "0",
    nombre: "Giovanni",
    correo: "giokoandres@hotmail.com",
    contrasenia: "Hello123"
  }
}
