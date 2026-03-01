import { calcularNotaMedia, calcularNotaMediaAlumnos, FichaAlumno, Notas, calcularNotaFinal , calcularCalificacionAlumno, fichaFinalAlumno, calificacionesAlumno} from "./main";


describe( "calcularNotaMedia", () => {
    it('Deberia devolver la nota media de un alumno', () => {
        //Arrange
        const notas: number [] = [7, 8, 9];

         //Act
            const resultado = calcularNotaMedia(notas);

        //Assert
        const notaMedia = 8;
        expect(resultado).toBe(notaMedia);
    });

     it('Deberia devolver la nota media de un alumno', () => {
        //Arrange
        const notas: number [] = [6, 7, 8];

         //Act
            const resultado = calcularNotaMedia(notas);

        //Assert
        const notaMedia = 7;
        expect(resultado).toBe(notaMedia);
    });

    it('Deberia devolver la nota media de un alumno', () => {
        //Arrange
        const notas: number [] = [3, 2, 6];

         //Act
            const resultado = calcularNotaMedia(notas);

        //Assert
        const notaMedia = 3.67;
        expect(resultado).toBe(notaMedia);
    });
});

describe("calcularNotaMediaAlumnos", () => {
    it('Deberia devolver la nota media de todos los alumnos', () => {
        //Arrange
     const fichaAlumnos: FichaAlumno[] = [
        {
        alumno: "Juan Perez", 
        nota: [7, 8, 9]},
        {
         alumno: "Maria Lopez",
         nota: [6, 7, 8]
        }
     ];
        //Act

        const resultado = calcularNotaMediaAlumnos(fichaAlumnos);

        //Assert
        const notasMedias: Notas[] = [
            {
                alumno: "Juan Perez",
                notaMedia: 8
            },
            {
                alumno: "Maria Lopez",
                notaMedia: 7
            }
        ];
         
       expect(resultado).toEqual(notasMedias);
    
 });
});


describe("calcularNotaFinal", () => {
    it ('Deberia devolver la nota final del alumno', () => {
      
        //Arrange
      const notaMediaPracticas = 8;
      const notaMediaExamenes = 7;

        //Act

        const resultado = calcularNotaFinal(notaMediaExamenes, notaMediaPracticas);
        
        //Assert

        const notaFinal = 7.4;

        expect(resultado).toEqual(notaFinal);
   
    });

      it ('Deberia devolver la nota final del alumno', () => {
      
        //Arrange
      const notaMediaPracticas = 6;
      const notaMediaExamenes = 7;

        //Act

        const resultado = calcularNotaFinal(notaMediaExamenes, notaMediaPracticas);
        
        //Assert

        const notaFinal = 6.6;

        expect(resultado).toEqual(notaFinal);
   
    });

    
      it ('Deberia devolver la nota final del alumno', () => {
      
        //Arrange
      const notaMediaPracticas = 3;
      const notaMediaExamenes = 2;

        //Act

        const resultado = calcularNotaFinal(notaMediaExamenes, notaMediaPracticas);
        
        //Assert

        const notaFinal = 2.4;

        expect(resultado).toEqual(notaFinal);
   
    });
});

describe ("calcularCalificacionAlumnos", () => {
 it ('Deberia devolver la nota final de todos los alumnos', () => {
    //Arrange
    const fichaFinalAlumnos: fichaFinalAlumno[] = [
    {
    alumno: 'Juan Perez',
    notasPracticas: [7, 8],
    notasExamenes: [7, 8, 9],
    },
    
    {
    alumno: 'Maria Lopez',
    notasPracticas: [3, 0],
    notasExamenes: [6, 7, 8],
    }
    ];

    //Act

    const resultado = calcularCalificacionAlumno(fichaFinalAlumnos);

    //Assert
    const notasFinales: calificacionesAlumno[] = [
   {
  alumno: "Juan Perez",
  notaFinal: 7.7
   },

   {
  alumno: "Maria Lopez",
  notaFinal: 3.7,
   }
];

    expect(resultado).toEqual(notasFinales);

 });
});