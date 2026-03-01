import { calcularNotaFinal } from "./calcular-nota-final";

describe("calcularNotaFinal", () => {
    it('Deberia devolver la nota final de un alumno', () => {

        //Arrange
        const notaMedias = [7, 8];
        const peso = [0.6, 0.4];


        //Act

        const resultado = calcularNotaFinal(notaMedias, peso);


        //Assert
        
        const notaFinal = 7.6;

        expect(resultado).toEqual(notaFinal);
    });

       it('Deberia devolver la nota final de un alumno', () => {

        //Arrange
        const notaMedias = [3, 2];
        const peso = [0.6, 0.4];


        //Act

        const resultado = calcularNotaFinal(notaMedias, peso);


        //Assert
        
        const notaFinal = 2.6;

        expect(resultado).toEqual(notaFinal);
    });
});