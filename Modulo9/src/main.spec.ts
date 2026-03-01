import { calcularNotaMedia, calcularNotaMediaAlumnos, FichaAlumno, Notas } from "./main";


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