import { palabras } from './motor';
import { cargarJuego, cargarBotonesLetras } from './ui';

document.addEventListener('DOMContentLoaded', () => {
    const numeroAleatorio = Math.floor(Math.random() * 401);
    cargarJuego(palabras[numeroAleatorio]);
    cargarBotonesLetras(palabras[numeroAleatorio]);
    console.log(palabras[numeroAleatorio]);
});