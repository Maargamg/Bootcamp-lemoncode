export interface Pelicula {
    titulo: string;
    resumen: string;
    genero: string;
    masVisto: boolean;
    calificacionImdb: number;
    premiosGalardon: boolean;
    fechasEstreno: Date;
    imagen: string;
}

export const nombreClases = {
    peliculas: "peliculas",
    listaPeliculas: "lista-peliculas",
    peliculasContenedor: "peliculas-contenedor",
    pelicula: "pelicula",
}