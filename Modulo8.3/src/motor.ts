import {Carta, Tablero} from './modelo';

export const barajarCartas = (cartas : Carta[]): Carta[] => {
  for(let i = cartas.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};


export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  const carta = tablero.cartas[indice];
  if (carta.encontrada || carta.estaVuelta) return false;
  const cartasVolteadas = tablero.cartas.filter(c => c.estaVuelta && !c.encontrada);
  if (cartasVolteadas.length >= 2) return false;
  return true;
};

//TO DO : Hacer comprobaciones de esta función.


/*const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
  //...
}*/

/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*//*
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  //...
}*/

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*//*
const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
  //...
}*/

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*//*
const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
  // ...
}*/

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*//*
export const esPartidaCompleta(tablero: Tablero) : boolean => {
  //...
}*/

/*
Iniciar partida
*/
/*
export const iniciaPartida = (tablero: Tablero): void => {
  //...
};*/