import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculo-edades',
  templateUrl: './calculo-edades.component.html',
  styleUrls: ['./calculo-edades.component.sass']
})
export class CalculoEdadesComponent implements OnInit{

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
}
