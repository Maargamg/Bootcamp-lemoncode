interface Partida {
  score: number;
  estadoPartida: EstadoPartida;
}

type EstadoPartida = 'Ganar' | 'Perder' | 'seguir_jugando';

export const actualizarScore = (nuevosPuntos: number) => {
  partida.score = nuevosPuntos;
}

export const partida: Partida = {
  score: 0,
  estadoPartida: 'seguir_jugando',
};