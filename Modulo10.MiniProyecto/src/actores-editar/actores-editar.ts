import { obtenerActor, actualizarActor } from "./actores-editar.api";
import { Actor } from "./actores-editar.modelo";

const capturarIdDeLaUrl = (): string => {
    const parametrosUrl = new URLSearchParams(window.location.search);
    const id = parametrosUrl.get("id") || "";

    return decodeURIComponent(id);
};

const obtenActor = async () : Promise<Actor> => {
 const id = capturarIdDeLaUrl();
 const actor = await obtenerActor(id);

 return actor;
};

const pintarDatosActor = async(): Promise<void> => {
    const actor: Actor = await obtenActor();

    const name = document.querySelector("#name");
    const bio = document.querySelector("#bio");
    const cover_url = document.querySelector("#cover_url");

    if(name && name instanceof HTMLInputElement){
        name.value = actor.name;
    } else {
        throw new Error("Error al obtener el nombre");
    }


    if(bio && bio instanceof HTMLTextAreaElement){
        bio.value = actor.bio;
    } else {
        throw new Error("Error al obtener la biografia");
    }

    if(cover_url && cover_url instanceof HTMLInputElement){
        cover_url.value = actor.cover_url;
    } else {
        throw new Error("Error al obtener la url de la imagen");
    }
};

const obtenerValorCampo = (campo: string): string => {
    const elementoCampo = document.querySelector(`#${campo}`);

    if((elementoCampo && elementoCampo instanceof HTMLInputElement) ||
    elementoCampo instanceof HTMLTextAreaElement) {
        return elementoCampo.value;
    } else {
        throw new Error(`Error al encontrar el campo ${campo}`);
    }
};

const actualizaActor = async(evento: Event) : Promise<void> => {
    evento.preventDefault();

    const actor: Actor = {
        id: capturarIdDeLaUrl(),
        name: obtenerValorCampo("name"),
        movies: obtenerValorCampo("movies"),
        bio: obtenerValorCampo("bio"),
        cover_url: obtenerValorCampo("cover_url"),
    };

    try {
        await actualizarActor(actor);
    } catch (error) {
        alert(error);
    }

    window.location.href = "../pelicula-listado/index.html";


};
 
document.addEventListener("DOMContentLoaded",  () => {
    const formulario = document.querySelector("#formulario");
    if(formulario && formulario instanceof HTMLFormElement) {
        formulario.addEventListener("submit", actualizaActor);

    } else {
        throw new Error("No se ha encontrado el formulario");
    }

    pintarDatosActor();

});