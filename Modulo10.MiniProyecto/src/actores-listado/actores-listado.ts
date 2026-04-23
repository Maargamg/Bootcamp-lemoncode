import { crearBotonParams, Actor } from "./actores-listado.modelo";
import { obtenerActores, borrarActor   } from "./actores-listado.api"; 


const editaPelicula = (id: string) => {
  window.location.href = `../actores-editar/index.html?id=${encodeURIComponent(id)}`;
};

const borraPelicula = async (id: string) => {
    try {
  await borrarActor(id);
  const listado = document.querySelector("#listado-actores");
  if(listado && listado instanceof HTMLDivElement) {
    listado.innerHTML = "";
    pintarActores();
    alert("Actor borrado con éxito");
  } else {
    throw new Error("Error al eliminar el actor");
  }} catch (error) {
    alert(error);
  }
};

const crearElementoImagen = (
  portada: string,
  name: string
): HTMLImageElement => {
    const imagen = document.createElement("img");
    imagen.src = portada;
    imagen.alt = name;
    return imagen;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    return parrafo;
};

const crearBoton = (crearBotonParams: crearBotonParams): HTMLButtonElement => {
    const {texto, id, nombreClase, onClick} = crearBotonParams;
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.addEventListener("click", () => {
        onClick(id);
    });

    boton.classList.add(nombreClase);
    return boton;

};

const crearGrupoBotones = (id: string): HTMLDivElement => {
    const grupoBotones = document.createElement("div");
    grupoBotones.classList.add("grupo-botones");

    const botonEditar = crearBoton({
        texto: "Editar",
        id: id,
        nombreClase: "boton-editar",
        onClick: () => editaPelicula(id),
    });

    const botonBorrar = crearBoton({
        texto: "Borrar",
        id: id,
        nombreClase: "boton-borrar",
        onClick: () => borraPelicula(id),
    });

    grupoBotones.appendChild(botonEditar);
    grupoBotones.appendChild(botonBorrar);

    return grupoBotones;
};


const creaContenedorPelicula = (actor: Actor): HTMLDivElement => {
   const elementoActor = document.createElement("div");
   elementoActor.classList.add("actores-contenedor");

   const imagen = crearElementoImagen(actor.image, actor.name);
   elementoActor.appendChild(imagen);

   const name = crearElementoParrafo(actor.name);
   elementoActor.appendChild(name);

   const bio = crearElementoParrafo(actor.bio);
   elementoActor.appendChild(bio);


   const grupoBotones = crearGrupoBotones(actor.id);
   elementoActor.appendChild(grupoBotones);

   return elementoActor;
};


const pintarActores = async () => {
    const actores = await obtenerActores();
    const listado = document.querySelector("#listado-actores");

    if(listado && listado instanceof HTMLDivElement) {
        actores.forEach((actor) => {
             const contenedorActores = creaContenedorPelicula(actor);
             listado.appendChild(contenedorActores);
        });
    } else {
        throw new Error ("No se ha encontrado ningún listado");

    }
};

document.addEventListener("DOMContentLoaded", pintarActores);