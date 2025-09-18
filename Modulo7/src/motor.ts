import  {score} from './modelo';



export const dameMensajePartidaCuandoMePlanto = () => {
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
  return 'Este mensaje no deberia de estar saliendo XD';
  }

export const generarNumeroAleatorio = () : number => { return Math.floor(Math.random() * 10 );
}

export const dameNumeroCarta = (aleatorio : number) => {
  if (aleatorio > 7) {
    return aleatorio + 2;
  }

  return aleatorio;
}

export const damePuntosCarta = (carta : number) => {
 if (carta > 7){
  return 0.5;
 }

 return carta;
}

export const sumarPuntos = (puntosCarta: number) => {
  return puntosCarta + score;
}


