export interface Movie {
    id: string;
    name: string;
    movies: string[];
    bio: string;
    cover_url: string;
}

export interface crearBotonParams {
    texto: string;
    id: string;
    nombreClase: string;
    onClick: (id: string) => void;
}