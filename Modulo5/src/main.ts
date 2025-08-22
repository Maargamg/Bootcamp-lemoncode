let score: number = 0;

const generarNumeroAleatorio = () : number => { return Math.floor(Math.random() * 10 );
}

const dameNumeroCarta = (aleatorio : number) => {
  if (aleatorio > 7) {
    return aleatorio + 2;
  }

  return aleatorio;
}

const dameUrlCarta = (carta: number) => {
  switch(carta) {
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

const damePuntosCarta = (carta : number) => {
 if (carta > 7){
  return 0.5;
 }

 return carta;
}

const sumarPuntos = (puntosCarta: number) => {
  return puntosCarta + score;
}
const actualizarScore = (nuevosPuntos : number) => {
 score = nuevosPuntos;
}

const mostrarScore = () => {
  const elementoDiv = document.getElementById('score');
   if (elementoDiv !== null && elementoDiv !== undefined && elementoDiv instanceof HTMLDivElement) {
    elementoDiv.textContent = score.toString();
   }
}

const dameMensajePartidaCuandoMePlanto = () => {
  if (score < 5) {
    return 'Has sido muy conservador';
  } else if (score === 7.5) {
    return '¡¡¡Enhorabuena, has ganado!!!';
  } else if (score === 5 || score < 7){
    return 'Te ha entrado el canguelo eh?';
  } else if (score === 7) {
    return 'Casi casi..';
  } else if (score > 7.5) {
    return'GAME OVER';
  }
  return 'Este mensaje no deberia de estar saliendo';
  }

  const desahabilitarBotonDameCarta = (estaDeshabilitado: boolean) => {
    const botonDameCarta = document.getElementById('dameCarta');
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement) {
      botonDameCarta.disabled = estaDeshabilitado;
    }
  }

  const mostratMensaje = (mensaje: string) => {
    const elementoMensaje = document.getElementById('mensaje');
    if(elementoMensaje !== null && elementoMensaje !== undefined && elementoMensaje instanceof HTMLDivElement) {
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



  const comprobarPartida = () => {
    if (score > 7.5){
     mostratMensaje ('GAME OVER');
     desahabilitarBotonDameCarta(true);
    }else if (score === 7.5) { 
     mostratMensaje ('¡¡¡Enhorabuena, has ganado!!!');
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

const botonDameCarta = document.getElementById('dameCarta') 
    
if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener('click', () => {
  dameCarta()
  })
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



const botonNewGame = document.getElementById('newGame')
if (botonNewGame !== null && botonNewGame !== undefined && botonNewGame instanceof HTMLButtonElement) {
 botonNewGame.addEventListener('click', () => {
  newGame();
 })
}

const botonMePlanto = document.getElementById('mePlanto')
 if(botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener('click', () => {
    mePlanto();
  })
 }

 const botonQueHabriaPasado = document.getElementById('queHabriaPasado');
  if(botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener('click', () => {
    quehabriaPasado();
  })
  }