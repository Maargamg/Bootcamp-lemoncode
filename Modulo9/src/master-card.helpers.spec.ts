import { eliminaUltimoDigito, obtenerUltimoDigito, multiplicandoPorDosSaltandoUno, sumaDecenasUnidadesColeccion, sumaDigitos, calculaFlagDeSumaTotal } from "./master-card.herlpers";

describe("eliminarUltimoDigito", () => {
    it("Debería devolver un throw si la entrada es undefined", () => {
        //Arrange
       const cadena: any = undefined;

        //Act
       const resultado = () => eliminaUltimoDigito(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

      it("Debería devolver un throw si la entrada es null", () => {
        //Arrange
       const cadena: any = null;

        //Act
       const resultado = () => eliminaUltimoDigito(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

          it("Debería devolver un throw si la entrada está vacia", () => {
        //Arrange
       const cadena: any = "";

        //Act
       const resultado = () => eliminaUltimoDigito(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

    it("Deberia devolver un string sin el último dígito", () => {
        //Arrange

        const cadena = "123456789";

        //Act
        const resultado = eliminaUltimoDigito(cadena);

        //Assert
        expect(resultado).toBe("12345678");
    })
});

describe("obtenerUltimoDigito", () => {
    it ("Deberia devolver un throw si la entrada es undefined", () => {
         //Arrange
       const cadena: any = undefined;

        //Act
       const resultado = () => obtenerUltimoDigito(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

     it("Debería devolver un throw si la entrada es null", () => {
        //Arrange
       const cadena: any = null;

        //Act
       const resultado = () => obtenerUltimoDigito(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

     it("Debería devolver un throw si la entrada está vacia", () => {
        //Arrange
       const cadena: any = "";

        //Act
       const resultado = () => obtenerUltimoDigito(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

    it("Debería devolver el último número de la cadena convertido a número", () =>  {
 //Arrange
const cadena = "123456789";

 //Act
 const resultado = obtenerUltimoDigito(cadena);

//Assert
expect(resultado).toBe(9);
});
});

describe("multiplicaPorDosSaltandoUno", () => {
    it("Debería devolver un throw si la entrada es undefined", () => {
        //Arrange
       const cadena: any = undefined;

        //Act
       const resultado = () => multiplicandoPorDosSaltandoUno(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

      it("Debería devolver un throw si la entrada es null", () => {
        //Arrange
       const cadena: any = null;

        //Act
       const resultado = () => multiplicandoPorDosSaltandoUno(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

          it("Debería devolver un throw si la entrada está vacia", () => {
        //Arrange
       const cadena: any = "";

        //Act
       const resultado = () => multiplicandoPorDosSaltandoUno(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

    it(`123456789 => [2, 2, 6, 4, 10, 6, 14, 8, 18] Debería devolver un array con los números separados y si leemos el array de atrás para delante, los números que están en posición impar multiplicarlos por dos"`,() => {
//Arrange
const cadena = "123456789";

//Act
const resultado = multiplicandoPorDosSaltandoUno(cadena);

//Assert
expect(resultado).toEqual([2, 2, 6, 4, 10, 6, 14, 8, 18]);
    });
});

describe("sumaDecenasUnidadesColeccion", () => {
 it("Deberia devolver throw error si es undefined", () => {
      //Arrange
       const cadena: any = undefined;

        //Act
       const resultado = () => sumaDecenasUnidadesColeccion(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
 });

      it("Debería devolver un throw si la entrada es null", () => {
        //Arrange
       const cadena: any = null;

        //Act
       const resultado = () => sumaDecenasUnidadesColeccion(cadena);

        //Assert

    expect(resultado).toThrowError("No se ha introducido una cadena");
    });

    it(`[1, 2, 18, 4, 5, 12, 7, 14, 9] => [1, 2, 9, 4, 5, 3, 7, 5, 9] Deberís devolver un array con la suma de las decenas y las unidades de los números de la entrada`, () => {
      
      //Arrange

      const coleccion = [1, 2, 18, 4, 5, 12, 7, 14, 9];

      //Act

      const resultado = sumaDecenasUnidadesColeccion(coleccion);

      //Assert
      expect(resultado).toEqual([1, 2, 9, 4, 5, 3, 7, 5, 9]);
    });
});

describe("sumaDigitos", () => {
      it ("Deberia devolver un throw si la entrada es undefined", () => {
         //Arrange
       const numero: any = undefined;

        //Act
       const resultado = () => sumaDigitos(numero);

        //Assert

    expect(resultado).toThrowError("No se ha introducido un número");
    });

     it("Debería devolver un throw si la entrada es null", () => {
        //Arrange
       const numero: any = null;

        //Act
       const resultado = () => sumaDigitos(numero);

        //Assert

    expect(resultado).toThrowError("No se ha introducido un número");
    });

    it(`[1, 2, 3, 4, 5, 6, 7, 8, 9] => 45
        debería devolver la suma de las dígitos de un array de números`, () => {
    //Arrange
   const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //Act

    const resultado = sumaDigitos(numero);

    //Assert

    expect(resultado).toBe(45);
    });
});

describe ("calculaFlagDeSumaTotal", () => {
    it("Deberia devolver throw si es undefined", () => {
          //Arrange
       const numero: any = undefined;

        //Act
       const resultado = () => calculaFlagDeSumaTotal(numero);

        //Assert

    expect(resultado).toThrowError("No se ha introducido un número");
    });

     it("Debería devolver un throw si la entrada es null", () => {
        //Arrange
       const numero: any = null;

        //Act
       const resultado = () => calculaFlagDeSumaTotal(numero);

        //Assert

    expect(resultado).toThrowError("No se ha introducido un número");
    });

    it(`Deveria devolver 7 si la suma total es 73`, () => {
        //Arrange

        const sumaTotal: number = 73;
        //Act

        const resultado = calculaFlagDeSumaTotal(sumaTotal);

        //Assert
        expect(resultado).toBe(7);
    });

     it(`Deveria devolver 3 si la suma total es 67`, () => {
        //Arrange

        const sumaTotal: number = 67;
        //Act

        const resultado = calculaFlagDeSumaTotal(sumaTotal);

        //Assert
        expect(resultado).toBe(3);
    });
});


