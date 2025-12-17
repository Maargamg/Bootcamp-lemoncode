import { palabras } from './motor';
import { cargarJuego, cargarBotonesLetras, iniciarPartida, resetearJuego} from './ui';
import { juego } from './modelo';

document.addEventListener('DOMContentLoaded', () => {
    const numeroAleatorio = Math.floor(Math.random() * 401);
    cargarJuego(palabras[numeroAleatorio]);
    cargarBotonesLetras(palabras[numeroAleatorio]);
    console.log(palabras[numeroAleatorio]);
});

document.addEventListener('DOMContentLoaded', () => {
  const botonEmpezar = document.querySelector('.empezarPartida') as HTMLButtonElement;
  const botonReiniciar = document.querySelector('.volverEmpezar') as HTMLButtonElement;

  botonReiniciar.classList.add('ocultar');

  botonEmpezar.addEventListener('click', () => {
    iniciarPartida();
  });

  botonReiniciar.addEventListener('click', () => {
    resetearJuego();
  });
});