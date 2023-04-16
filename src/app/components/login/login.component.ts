import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router){}

  formularioIngreso: any;

  ngOnInit() {
    this.formularioIngreso = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  //https://codingpotions.com/angular-formularios
  ingresar() {
    let usuario = this.formularioIngreso.get('usuario').value;
    let password = this.formularioIngreso.get('password').value;

    let usuarios;
    let usuariosString = localStorage.getItem('users');
    if (usuariosString != null) {
      usuarios = JSON.parse(usuariosString);
    }

    let resultado = usuarios.find(user => {
      if(usuario == user.usuario && password == user.password) {
        return true;
      } else {
        return false;
      }
    });
    
    if (resultado) {
      this.router.navigate(['/bienvenida'])
    }
  }
}
