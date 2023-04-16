import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const contraseniaConfirmadaValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const repetirPassword = control.get('repetirPassword');
  
  return password && repetirPassword && password.value === repetirPassword.value ? null : { contraseñasIguales: true };
};