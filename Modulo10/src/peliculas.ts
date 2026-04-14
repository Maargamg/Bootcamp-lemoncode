import Axios, { AxiosError } from "axios";
import { Movie } from "./model";
export const leePeliculas = (): Promise<Movie[]> => {
    const promise = new Promise<Movie[]> ((resolve, reject) => {
    Axios.get("http://localhost:3000/movies")
    .then(response => {
        resolve(response.data)
    })
    .catch((error: AxiosError) => {
        switch(error.response?.status) {
            case 403: 
              reject("Demasiadas peticiones a la API de peliculas");
            case 503:
              reject("La API está caída"); 
        }
    });
    });

    return promise;
};