import { peliculas } from "./datos.";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () =>{
    pintarListaPeliculas(peliculas, {titulo: "Todas las películas"});
    pintarListaPeliculas(peliculas, {
        titulo: "Peliculas de Aventuras",
        filtro: {genero: "Aventuras", caracteristicas: "genero"},
});

  pintarListaPeliculas(peliculas, {
  titulo: "Peliculas Familiares",
  filtro: { genero: "Familiar", caracteristicas: "genero"},
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Películas de Animación",
    filtro: {genero: "Animación", caracteristicas: "genero"},
  });
});