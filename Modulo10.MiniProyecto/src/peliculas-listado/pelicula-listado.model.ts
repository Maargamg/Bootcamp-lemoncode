export interface Movie {
    id: string;
    title: string;
    year: number;
    director: string;
    cover_url: string;
}

export interface crearBotonParams {
    texto: string;
    id: string;
    nombreClase: string;
    onClick: (id: string) => void;
}