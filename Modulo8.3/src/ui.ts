const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
   const titulo = document.createElement("h2");
   titulo.textContent = tituloSeccion;
   return titulo;
};

const crearContenedor = (nombreClase: string): HTMLDivElement => {
  const listaPeliculas = document.createElement("div");
  listaPeliculas.classList.add(nombreClase);
  listaPeliculas.id = nombreClase;
  return listaPeliculas;
};

import { Pelicula , nombreClases} from "./modelo";
export const pintarListaPeliculas = (
  tituloSeccion: string,
  listaPeliculas: Pelicula[],
): void => {
  //obtener div principal
  const appDiv = document.getElementById("principal");
  //comprobar que existe
  if(appDiv && appDiv instanceof HTMLDivElement) {
    //crear un div para las peliculas
    const crearDivPeliculas = crearContenedor(nombreClases.peliculas);
    // añadir el div de peliculas al div principal
    appDiv.appendChild(crearDivPeliculas);

    // crear titulo
    const titulo = crearTitulo(tituloSeccion);
    //añadir el titulo al div de peliculas
    crearDivPeliculas.appendChild(titulo);

    // crear div lista ded peliculas
   const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas);
   // añadir div lista de peliculas
   crearDivPeliculas.appendChild(divListaPeliculas);

   //crear div contenedor de peliculas
   const divPeliculasContenedor = crearContenedor(nombreClases.peliculasContenedor);
   //añadir div contenerdor de peliculas al div lista de peliculas
   divListaPeliculas.appendChild(divPeliculasContenedor);

   // pintar peliculas
listaPeliculas.forEach((pelicula) => {
// crear div pelicula
const divPelicula = crearContenedor(nombreClases.pelicula);
// añadimos datos a la pelicula
divPelicula.innerHTML =
`<img src=${pelicula.imagen}" alt="${pelicula.titulo}"/>
<h3>${pelicula.titulo}</h3>
`;
//añadir div pelicula al div contenedor de pelicula
divPeliculasContenedor.appendChild(divPelicula);
})

  }else {
    console.log ("No se encontro el elemento");
  }
}