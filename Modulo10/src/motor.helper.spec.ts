import { commonPasswords } from './motor.helper';
import {tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes} from './motor.helper';

describe("tieneMayusculasYMinusculas", () => {
    it("Deberia devolver {esValida: false, error:La clave debe de tener mayúsculas y minúsculas} si no contiene mayusculas", () => {
//Arrange
const clave = "margarita";

//Act
const resultado = tieneMayusculasYMinusculas(clave);

//Assert
expect(resultado).toEqual({ esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" });
    });

    it("Deberia devolver {esValida: false, error:La clave debe de tener mayúsculas y minúsculas } si no contiene minusculas", () => {
//Arrange
const clave = "MARGARITA";

//Act
const resultado = tieneMayusculasYMinusculas(clave);

//Assert
expect(resultado).toEqual({ esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" });
    });


   it("Deberia devolver {esVlaida: true} porque cumple las condiciones", () => {
//Arrange
const clave = "Margarita";

//Act
const resultado = tieneMayusculasYMinusculas(clave);

//Assert
expect(resultado).toEqual({ esValida: true });
    });
});

describe("tieneNumeros", () => {
    it("Deberia devolver {esValido: false, error: La clave debe de tener números}si no contiene números", () => {
        //Arrange
        const clave = "Margarita";

        //Act
        const resultado = tieneNumeros(clave);

        //Assert
        expect(resultado).toEqual({esValida: false, error:"La clave debe de tener números"});

    });


    it("Deberia devolver {esVlaida: true} si contiene números", () => {
        //Arrange
        const clave = "Margarita95";

        //Act
        const resultado = tieneNumeros(clave);

        //Assert
        expect(resultado).toEqual({esValida: true});

    });
});

describe("tieneCaracteresEspeciales", () => {
    it("Deberia devolver {esValida:false, error:La clave debe de tener caracteres especiales} si no contiene al menos un caracter especial", () => {
        //Arrange
        const clave = "Margarita";

        //Act
        const resultado = tieneCaracteresEspeciales(clave);

        //Assert
        expect(resultado).toEqual({esValida: false, error: "La clave debe de tener caracteres especiales"});
    });

    it("Deberia devolver {esValida:true} si contiene al menos un caracter especial", () => {
        //Arrange
        const clave = "Margarit@";

        //Act
        const resultado = tieneCaracteresEspeciales(clave);

        //Assert
        expect(resultado).toEqual({esValida:true});
    });
});

describe("tieneLongitudMinima", () => {
 it("Deberia devolver {esValida: false, error: La clave debe de tener una longitud mínima de 8 caracteres} si no tiene una longitud minima de ocho caracteres", () => {
    //Arrange
    const clave = "Marga";

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert
    expect(resultado).toEqual({esValida: false, error:"La clave debe de tener una longitud mínima de 8 caracteres" });
 });

  it("Deberia devolver {esValida:true} si tiene una longitud mínima de ocho caracteres", () => {
    //Arrange
    const clave = "Margarita";

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert
    expect(resultado).toEqual({esValida: true });
 });
});

describe("tieneNombreUsuario", () => {
    it("Deberia devolver {esVlida: false, error:La clave no debe tener el nombre del usuario} si la clave contiene el nombre de usuario", () => {
        //Arrange
        const nombreUsuario = "Margarita";
        const clave = "Margarita";

        //Act
        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        //Assert
        expect(resultado).toEqual({esValida: false, error: "La clave no debe tener el nombre del usuario"});
    });

     it("Deberia devolver {esValida: true} si no contiene el nombre de usuario ", () => {
        //Arrange
        const nombreUsuario = "Antonio";
        const clave = "Margarita";

        //Act
        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        //Assert
        expect(resultado).toEqual({esValida:true});
    });   
});

describe("tienePalabrasComunes", () => {
    it("Deberia devolver {esValida: false, error: La clave no debe de contener palabras comunes} si la clave contiene palabras comines", () => {
    //Arrange
    const clave = "password";

    //Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    expect(resultado).toEqual({esValida: false, error: "La clave no debe de contener palabras comunes" })
    });


    it("Deberia devolver {esValida: true} si la clave no contiene palabras comunes", () => {
    //Arrange
    const clave = "Margarita";

    //Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    expect(resultado).toEqual({esValida: true});
    });
});