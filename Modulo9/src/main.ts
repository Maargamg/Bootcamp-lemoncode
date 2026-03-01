

export interface FichaAlumno {
    alumno: string;
    nota: number[];
}


export interface Notas {
    alumno: string;
    notaMedia: number;
}

export const calcularNotaMediaAlumnos = (fichaAlumnos: FichaAlumno[]): Notas[] => {
  const notasMedias: Notas[] = fichaAlumnos.map((fichaAlumnos) => {
    const notaMedia = calcularNotaMedia(fichaAlumnos.nota);

    return {
        alumno : fichaAlumnos.alumno,
        notaMedia
    };
});

  return notasMedias;
};  

export const calcularNotaMedia = (notas: number[]): number => {
  const sumarNotas = notas.reduce((acc, nota) => acc + nota, 0);
  const notaMedia = sumarNotas / notas.length;
  const notaMediaRedondeada = Number(notaMedia.toFixed(2));

  return notaMediaRedondeada;
};


export interface fichaFinalAlumno {
    alumno: string;
    notasPracticas: number[];
    notasExamenes: number[];
}

export interface calificacionesAlumno {
    alumno: string;
    notaFinal: number;
}


export const calcularCalificacionAlumno = (fichaAlumno: fichaFinalAlumno[]): calificacionesAlumno[] => {
   const notasFinales: calificacionesAlumno[] = fichaAlumno.map(fichaAlumno => {
    const notaMediaPracticas = calcularNotaMedia(fichaAlumno.notasPracticas);
    const notaMediaExamenes = calcularNotaMedia(fichaAlumno.notasExamenes);
    const notaFinal = calcularNotaFinal(notaMediaPracticas, notaMediaExamenes);

  return {
    alumno: fichaAlumno.alumno,
    notaFinal,
  };
});

 return notasFinales;
};

export const calcularNotaFinal = (notaMediaPracticas: number, notaMediaExamenes: number): number => {
 const notaFinal = notaMediaPracticas * 0.6 + notaMediaExamenes * 0.4;
 const notaFinalRedondeada = Number(notaFinal.toFixed(2));

 return notaFinalRedondeada;
};