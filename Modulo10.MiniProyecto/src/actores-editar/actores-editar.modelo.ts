export interface Actor {
    id: string;
    name: string;
    movies: string;
    bio: string;
    image: string;
}

export interface crearBotonParams {
    texto: string;
    id: string;
    nombreClase: string;
    onClick: (id: string) => void;
}