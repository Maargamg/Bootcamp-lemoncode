import axios from "axios";
import {Movie} from "./pelicula-editar.modelo";

export const obtenerPelicula = async (id: string): Promise<Movie> => {
    try{
        const {data} = await axios.get(`http://localhost:3000/movies/${id}`);
        return data;
    } catch (error) {
        throw new Error("Error al obtener la película");
    }
};

export const actualizarPelicula = async (pelicula: Movie) : Promise<void> => {
    try {
        await axios.put(`http://localhost:3000/movies/${pelicula.id}`, pelicula);

    } catch (error) {
        throw new Error("Error al actualizar la película");
    }
     
}