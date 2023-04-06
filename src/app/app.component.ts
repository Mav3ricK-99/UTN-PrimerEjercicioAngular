import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title: string = 'Ejercicios';

  user: any;
  usuarioIngresado: boolean = false;

  formularioLoginOculto: boolean = true;

  formularioEdades: any;

  sumaEdades: number = 0;
  promedioEdades: number = 0;

  ngOnInit() {
    this.formularioEdades = new FormGroup({
      edad1: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      edad2: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });

    this.onFormularioEdadesChange();
  };

  onFormularioEdadesChange() {
    this.formularioEdades.valueChanges.subscribe(form => {
      this.sumaEdades = form.edad1 + form.edad2;
      this.promedioEdades = this.sumaEdades / 2;
    });
  }

  cargarFormularioLogin() {
    this.formularioLoginOculto = false;
  }

  cerrarFormulario(formularioOculto: boolean) {
    this.formularioLoginOculto = formularioOculto;
  }

  mostrarBienvenida(user: Object) {
    this.user = user;
    this.usuarioIngresado = true;
    this.formularioLoginOculto = true;
    console.log("Usuario ingresado! Mostrando welcome");
  }
}
