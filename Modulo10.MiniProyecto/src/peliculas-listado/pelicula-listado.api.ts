import axios from "axios";
import { Movie } from "./pelicula-listado.model";


export const obtenerPeliculas = async (): Promise<Movie[]> => {
    try {
        const {data} = await axios.get("http://localhost:3000/movies");
        return data;
    } catch(error) {
        throw new Error ("Error al obtener las películas");
    };

}
