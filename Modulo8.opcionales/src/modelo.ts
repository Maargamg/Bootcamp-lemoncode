interface Juego {
  totalIntentos: number;
  palabraElegida: string;
  listadoLetras: string[];
  listadoLetrasEncontradas: string[];
}

export const juego: Juego = {
  totalIntentos: 0,
  palabraElegida: "",
  listadoLetras: [],
  listadoLetrasEncontradas: [],
}