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
}

/*
  Hemos cambiado la variable score, por un objeto, llamado partida. Esto lo hemos hecho para ser un poco más robustos en el código y que quede más profesional.

  Para no equivocarnos a la hora de escribir las propiedades de un objeto, hemos creado una interfaz, llamada Partida. OJO!! las interfaces, por norma, se escriben la primera letra de la palabra, en mayúscula y la de los objetos (o funciones) la primera letra en minúscula.

  Hemos cambiado, la función de actualizarScore, en vez de usar score a secas, hemos usado el objeto partida, con partida.score.

  Hemos definido varios valores para definir el estado de una partida. Para ello, hemos creado un type (esto es de TypeScript), y le hemos dado varios valores:

  - seguir_jugando => cuando los puntos sean menores a 7.5
  - Ganar => es igual a 7.5.
  - Perder => es mayor a 7.5.
*/
