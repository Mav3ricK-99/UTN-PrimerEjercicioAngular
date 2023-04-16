import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { CalculoEdadesComponent } from './components/calculo-edades/calculo-edades.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'registro',
  component: RegistroComponent
}, {
  path: 'ingresar',
  component: LoginComponent
}, {
  path: 'bienvenida',
  component: BienvenidoComponent
}, {
  path: 'edades',
  component: CalculoEdadesComponent
}, {
  path: "**",
  component: ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
