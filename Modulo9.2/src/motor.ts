import {tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes } from './motor.helper';
import './ui';

export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}


export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
  const mayusYMin = tieneMayusculasYMinusculas(clave);
  if (!mayusYMin.esValida) return mayusYMin;

  const numeros = tieneNumeros(clave);
  if (!numeros.esValida) return numeros;

  const caracteres = tieneCaracteresEspeciales(clave);
  if (!caracteres.esValida) return caracteres;

  const lengthMin = tieneLongitudMinima(clave);
  if (!lengthMin.esValida) return lengthMin;

  const noEsNombreDeUsuario = tieneNombreUsuario(nombreUsuario, clave);
  if (!noEsNombreDeUsuario.esValida) return noEsNombreDeUsuario;

  const noCommon = tienePalabrasComunes(clave, commonPasswords);
  if (!noCommon.esValida) return noCommon;

  return {
     esValida: true
   };
};





