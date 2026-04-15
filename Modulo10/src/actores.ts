import Axios, { AxiosError } from "axios";
import { Actors } from "./model";
export const leeActores = (): Promise<Actors[]> => {
    const promise = new Promise<Actors[]>((resolve, reject) => {
        Axios.get("http://localhost:3000/actors")
        .then((response) => {
            resolve(response.data);
        })
        .catch((error: AxiosError) => {
            switch (error.response?.status){
                case 404:
                    reject("Actor not found");
                case 500:
                    reject("Internal server error");  
            }
        });
    });
    return promise;
};
