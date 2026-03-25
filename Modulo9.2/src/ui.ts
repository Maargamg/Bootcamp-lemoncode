import {validarClave} from './motor';
import { commonPasswords } from './motor.helper';
import './modelo';

export const mensajeError = document.getElementById("texto") ;
export const usuario = document.getElementById("usuario");
export const contraseña = document.getElementById("contraseña");
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

