import {crearActor} from "./actores-crear.api";
import { Actor } from "./actores-crear.modelo";



const obtenerValorCampo = (campo: string): string => {
    const elementoCampo = document.querySelector(`#${campo}`);

    if((elementoCampo && elementoCampo instanceof HTMLInputElement) ||
    elementoCampo instanceof HTMLTextAreaElement) {
        return elementoCampo.value;
    } else {
        throw new Error(`Error al encontrar el campo ${campo}`);
    }
};

const creaActor = async (evento: Event): Promise<void> => {
 evento.preventDefault();


 const actor: Actor = {
  name: obtenerValorCampo("name"),
  movies: obtenerValorCampo("movies"),
  bio: obtenerValorCampo("bio"),
  cover_url: obtenerValorCampo("cover_url"),
 };

 try {
 await crearActor(actor);
 window.location.href = "../actores-listado/index.html";
 alert("Actor creado con exito");
 } catch (error) {
  alert(error);
 }
};

const iniciarFormulario = () => {
 const formulario = document.querySelector("#formulario");

    if(formulario && formulario instanceof HTMLFormElement) {
        formulario.addEventListener("submit", creaActor);
    } else {
        throw new Error("No se ha encontrado el formulario");
    }
};

document.addEventListener("DOMContentLoaded", iniciarFormulario);