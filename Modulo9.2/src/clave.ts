import {tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes } from './clave.helper';

export const commonPasswords: string[] = [
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}


const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
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


const mensajeError = document.getElementById("texto") ;
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
if(usuario !== null && usuario !== undefined && usuario instanceof HTMLInputElement &&
  contraseña !== null && contraseña !== undefined && contraseña instanceof HTMLInputElement &&
mensajeError !== null && mensajeError !== undefined && mensajeError instanceof HTMLParagraphElement){
    contraseña.addEventListener("input", () => {
    const resultado = validarClave(usuario.value, contraseña.value, commonPasswords);
    if(resultado.esValida) {
      mensajeError.textContent = "🪄Clave Valida✨";
    } else {
      mensajeError.textContent = "❌⛔¡¡Clave no valida!!🚫🔴" + resultado.error;
    }
    });
  }


