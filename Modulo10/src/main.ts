import "./peliculas";
import "./peliculas.spec";



















/*

const leeActores = (): Promise<Actors[]> => {
    const promise = new Promise<Actors[]>((resolve) => {
        axios.get("http://localhost:3000/actors")
        .then((response) => {
            resolve(response.data);
        });
    });
    return promise;
};

leeActores().then((actors) => {
    console.log(actors[0].id);
    console.log(actors);
});

const leePeliculas = (): Promise<Movie[]> => {
    const promise = new Promise<Movie[]>((resolve) => {
        axios.get("http://localhost:3000/movies")
        .then((response) => {
            resolve(response.data);
        });
    });
    return promise;
};

leePeliculas().then((peliculas) => {
    console.log("***", peliculas[0].tittle)
    console.log(peliculas);
});*/