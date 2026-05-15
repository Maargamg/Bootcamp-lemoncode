import axios from "axios";
import { Personajes } from "./personajes.modelo"; 


export const obtenerPersonajes = async (): Promise<Personajes[]> => {
    try {
        const {data} = await axios.get("http://localhost:3000/personajes");
        return data;
    } catch(error) {
        throw new Error ("Error al obtener el actor");
    }

};