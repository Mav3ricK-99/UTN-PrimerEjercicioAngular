import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { contraseniaConfirmadaValidator } from 'src/app/directives/contrasenia-debe-confirmarse.directive.ts';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  formularioRegistro: any;

  ngOnInit() {
    this.formularioRegistro = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repetirPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, { validators: contraseniaConfirmadaValidator });
  };

  registrarse() {
    let usuario = this.formularioRegistro.get('usuario').value;
    let password = this.formularioRegistro.get('password').value;

    let user = {
      usuario: usuario,
      password: password,
    };

    let usuariosString = localStorage.getItem('users');
    if(usuariosString != null) {
      let usuarios = JSON.parse(usuariosString);
      usuarios?.push(user);
      localStorage.setItem('users', JSON.stringify(usuarios));
    } else {
      let usuarios = [user];
      localStorage.setItem('users', JSON.stringify(usuarios));
    }

    this.formularioRegistro.reset();
  }

}
