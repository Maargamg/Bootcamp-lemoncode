import {Carta, Tablero} from './modelo';

export const barajarCartas = (cartas : Carta[]): Carta[] => {
  for(let i = cartas.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};


export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  const cartaSeleccionada = tablero.cartas[indice];
  if (cartaSeleccionada.encontrada || cartaSeleccionada.estaVuelta) return false;
  const cartasVolteadas = tablero.cartas.filter(c => c.estaVuelta && !c.encontrada);
  if (cartasVolteadas.length >= 2) return false;
  return true;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
 const cartaClicada = tablero.cartas[indice];
 if(!cartaClicada.estaVuelta && !cartaClicada.encontrada){
  cartaClicada.estaVuelta = true;
 }
};


const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
 const cartaA = tablero.cartas[indiceA];
 const cartaB = tablero.cartas[indiceB];

 return cartaA.idFoto === cartaB.idFoto;
}


const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
tablero.cartas[indiceA].encontrada === true;
tablero.cartas[indiceB].encontrada === true;
};


const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
  const cartaaA = tablero.cartas[indiceA];
  const cartaaB = tablero.cartas[indiceB];
 cartaaA.estaVuelta = false;
 cartaaB.estaVuelta = false;
}


export const esPartidaCompleta = (tablero: Tablero) : boolean => {
  const todasEncontradas = tablero.cartas.every(c => c.encontrada);
if(todasEncontradas) {
  tablero.estadoPartida = "PartidaCompleta";
} return true;
}

/*
Iniciar partida
*/
/*
export const iniciaPartida = (tablero: Tablero): void => {
  //...
};*/