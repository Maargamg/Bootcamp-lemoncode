

export interface FichaAlumno {
    alumno: string;
    nota: number[];
}


export interface Notas {
    alumno: string;
    notaMedia: number;
}

export const calcularNotaMediaAlumnos = (fichaAlumnos: FichaAlumno[]): Notas[] => {

};  

export const calcularNotaMedia = (notas: number[]): number => {
  const sumarNotas = notas.reduce((acc, nota) => acc + nota, 0);
  const notaMedia = sumarNotas / notas.length;
  const notaMediaRedondeada = Number(notaMedia.toFixed(2));

  return notaMediaRedondeada;
};