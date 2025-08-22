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
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
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

const comprobarPartida = () => {
  if (score < 4) {
    console.log ('Has sido muy conservador');
  } else if (score === 7.5) {
    console.log ('¡¡¡Enhorabuena, has ganado!!!');
  } else if (score === 5){
    console.log ('Te ha entrado el canguelo eh?');
  } else if (score === 7) {
    console.log ('Casi casi..');
  } else if (score > 7.5) {
    console.log ('GAME OVER');
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
}

const botonDameCarta = document.getElementById('dameCarta') 
    
if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener('click', () => {
  dameCarta()
  })
}


/*

const botonNewGame = document.getelementbyid('newGame')
  if(botonNewGame !== null && botonNewGame !== undifined && botonNewGame instanceof HTMLButtonElement) {
  botonNewGame.addEventlistener('click', () => {
  })
  }


const botonMePlanto = document.getelementbyid('mePlanto') 
  if(botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventlistener('click', () => {
})}


document.addEventListener('DOMContentLoaded', comprobarPartida);




  - Funcionalidad a los botones mePlanto y newGame.
  - Deshabilitar botón Dame carta cuando haya un game over.
  - Que habría pasado.
  - Mostrar mensajes por pantalla y que el mensaje solo sea visible al pulsar el botón mePlanto.
  - Repositorio github.
*/  