import { partida, actualizarScore } from './modelo';
import { generarNumeroAleatorio, dameNumeroCarta, damePuntosCarta, sumarPuntos, dameMensajePartidaCuandoMePlanto, obtenerEstadoPartida } from './motor';

const dameUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
    case 2:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
    case 3:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
    case 4:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
    case 5:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
    case 6:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
    case 7:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
    case 10:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
    case 11:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
    case 12:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
    default:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
  }
}

const mostrarUrlCarta = (urlCarta: string) => {
  const elementoImagen = document.getElementById('carta')
  if (elementoImagen !== null !== undefined && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlCarta;
  }

}

const mostrarScore = () => {
  const elementoDiv = document.getElementById('score');
  if (elementoDiv !== null && elementoDiv !== undefined && elementoDiv instanceof HTMLDivElement) {
    elementoDiv.textContent = partida.score.toString();
  }
}

const desahabilitarBotonDameCarta = (estaDeshabilitado: boolean) => {
  const botonDameCarta = document.getElementById('dameCarta');
  if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = estaDeshabilitado;
  }
}

const mostratMensaje = (mensaje: string) => {
  const elementoMensaje = document.getElementById('mensaje');
  if (elementoMensaje !== null && elementoMensaje !== undefined && elementoMensaje instanceof HTMLDivElement) {
    elementoMensaje.textContent = mensaje;
  }
}

const desahabilitarBotonMePlanto = (estaDeshabilitado: boolean) => {
  const botonMePlanto = document.getElementById('mePlanto');
  if (botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = estaDeshabilitado;
  }
}

const deshabilitarBotonQueHabriaPasado = (estaDeshabilitado: boolean) => {
  const botonQueHabriaPasado = document.getElementById('queHabriaPasado');
  if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.disabled = estaDeshabilitado;
  }
}



export const comprobarPartida = () => {
  if (obtenerEstadoPartida() === 'Perder') {
    mostratMensaje('GAME OVER');
    desahabilitarBotonDameCarta(true);
  } else if (obtenerEstadoPartida() === 'Ganar') {
    mostratMensaje('¡¡¡Enhorabuena, has ganado!!!');
    desahabilitarBotonDameCarta(true);
  }
}

const dameCarta = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = dameNumeroCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(numeroCarta);
  mostrarUrlCarta(urlCarta);
  const puntosCarta = damePuntosCarta(numeroCarta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarScore(puntosSumados);
  mostrarScore();
  comprobarPartida();
  deshabilitarBotonQueHabriaPasado(true);
}

const newGame = () => {
  actualizarScore(0);
  mostrarUrlCarta(" https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
  mostratMensaje('');
  mostrarScore();
  desahabilitarBotonDameCarta(false);
  desahabilitarBotonMePlanto(false);
  deshabilitarBotonQueHabriaPasado(true);
}

const mePlanto = () => {
  const mensaje = dameMensajePartidaCuandoMePlanto();
  desahabilitarBotonDameCarta(true);
  mostratMensaje(mensaje);
  desahabilitarBotonMePlanto(true);
  deshabilitarBotonQueHabriaPasado(false);

}

const quehabriaPasado = () => {
  desahabilitarBotonDameCarta(true);
  desahabilitarBotonMePlanto(true);
  dameCarta();
}

export const inicializarPartida = () => {
  const botonNewGame = document.getElementById('newGame')
  if (botonNewGame !== null && botonNewGame !== undefined && botonNewGame instanceof HTMLButtonElement) {
    botonNewGame.addEventListener('click', () => {
      newGame();
    })
  }

  const botonMePlanto = document.getElementById('mePlanto')
  if (botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener('click', () => {
      mePlanto();
    })
  }

  const botonQueHabriaPasado = document.getElementById('queHabriaPasado');
  if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener('click', () => {
      quehabriaPasado();
    })
  }

  const botonDameCarta = document.getElementById('dameCarta')

  if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener('click', () => {
      dameCarta()
    })
  }
}