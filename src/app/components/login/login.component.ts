import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  @Output()
  cancelarEvent = new EventEmitter<boolean>();

  @Output()
  ingresoUsuarioEvent = new EventEmitter<Object>();

  formularioIngreso: any;

  ngOnInit() {
    this.formularioIngreso = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  cancelarFormularioLogin() {
    this.cancelarEvent.emit(true);
  }

  //https://codingpotions.com/angular-formularios
  ingresar() {
    let usuario = this.formularioIngreso.get('usuario').value;
    let password = this.formularioIngreso.get('password').value;

    if (usuario === 'utn' && password === 'angular') {
      let user = {
        usuario: 'utn',
      };

      this.ingresoUsuarioEvent.emit(user);
    }
  }
}
