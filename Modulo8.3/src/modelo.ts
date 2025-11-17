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
};

export type TipoFlecha = "izquierda" | "derecha";

export type TipoGenero = "Familiar" | "Aventuras" | "Animación";

type TipoCaracteristicas = "genero" | "premios" | "masVistas" | "calificación";

export interface FiltroPeliculas {
 genero?: TipoGenero;
 caracteristicas: TipoCaracteristicas;
}

export interface ListaPeliculasConfiguracion {
    titulo: string;
    filtro?: FiltroPeliculas;

}

