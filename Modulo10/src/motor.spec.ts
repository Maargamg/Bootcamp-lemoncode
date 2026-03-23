import {validarClave} from './motor';
import { commonPasswords } from './motor.helper';

describe("validarClave", () => {
    it("Deberia devolver {esValida: false, error: el tipo de error que contiene}, si la clave no cumple todas las condiciones", () => {
        //Arrange
        const nombreUsuario = "marga";
        const clave = "marga";

        //Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        //Assert
        expect(resultado).toEqual({esValida: false, error: "La clave debe de tener mayúsculas y minúsculas"});
    });

        it("Deberia devolver {esValida: true}, si la clave cumple todas las condiciones", () => {
        //Arrange
        const nombreUsuario = "Antonio";
        const clave = "@Margarita95";

        //Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        //Assert
        expect(resultado).toEqual({esValida:true});
    });
});