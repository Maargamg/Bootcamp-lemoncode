import { obtenerPersonajes } from './personajes.api';
import {Personajes, crearBotonParams} from './personajes.modelo';



const buscarPersonaje = (id: string) => {
  window.location.href = `?id=${encodeURIComponent(id)}`;
};

const crearElementoImagen = (
  portada: string,
  titulo: string
): HTMLImageElement => {
    const imagen = document.createElement("img");
    imagen.src = portada;
    imagen.alt = titulo;
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

    const botonBuscar = crearBoton({
        texto: "Editar",
        id: id,
        nombreClase: "boton-buscar",
        onClick: () => buscarPersonaje(id),
    });


    grupoBotones.appendChild(botonBuscar);

    return grupoBotones;
};


const creaContenedorPersonajes = (personaje: Personajes): HTMLDivElement => {
   const elementoPersonaje = document.createElement("div");
   elementoPersonaje.classList.add("pelicula-contenedor");

   const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
   elementoPersonaje.appendChild(imagen);

   const nombre = crearElementoParrafo(personaje.nombre);
   elementoPersonaje.appendChild(nombre);

   const amigo = crearElementoParrafo(personaje.amigo);
   elementoPersonaje.appendChild(amigo);
 
   const especialidad = crearElementoParrafo(personaje.especialidad);
   elementoPersonaje.appendChild(especialidad);

   const habilidades = crearElementoParrafo(personaje.habilidades);
   elementoPersonaje.appendChild(habilidades);
  

   const grupoBotones = crearGrupoBotones(personaje.id);
   elementoPersonaje.appendChild(grupoBotones);

   return elementoPersonaje;
};


const pintarPersonajes = async () => {
    const personajes = await obtenerPersonajes();
    const listado = document.querySelector("#listado-personajes");

    if(listado && listado instanceof HTMLDivElement) {
        personajes.forEach((personaje) => {
             const contenedorPersonajes = creaContenedorPersonajes(personaje);
             listado.appendChild(contenedorPersonajes);
        });
    } else {
        throw new Error ("No se ha encontrado ningún personaje");

    }
};

document.addEventListener("DOMContentLoaded", pintarPersonajes);