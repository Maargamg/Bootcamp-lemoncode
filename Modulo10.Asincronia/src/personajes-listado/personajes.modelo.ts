export interface Personajes {
    id: string;
    nombre: string;
    especialidad: string;
    habilidades: string;
    amigo: string;
    imagen: string;
}

export interface crearBotonParams {
    texto: string;
    id: string;
    nombreClase: string;
    onClick: (id: string) => void;
}