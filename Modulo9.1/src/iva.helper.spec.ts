import {describe, it, expect} from 'vitest';
import {obtenerIva, calcularPrecio, calculaTicket} from './iva';

describe("obtenerIva", () => {
    it("Debería devolver 21 si el IVA es de tipo general", () => {

        //Arrange
        const tipoIva = "general";

        //Act
        const resultado = obtenerIva(tipoIva);

        //Assert
        expect(resultado).toEqual(21);
    });

     it("Debería devolver 10 si el IVA es de tipo reducido", () => {

        //Arrange
        const tipoIva = "reducido";

        //Act
        const resultado = obtenerIva(tipoIva);

        //Assert
        expect(resultado).toEqual(10);
    });

    
     it("Debería devolver 5 si el IVA es de tipo superreducidoA", () => {

        //Arrange
        const tipoIva =  "superreducidoA";

        //Act
        const resultado = obtenerIva(tipoIva);

        //Assert
        expect(resultado).toEqual(5);
    });

    
     it("Debería devolver 4 si el IVA es de tipo superreducidoB", () => {

        //Arrange
        const tipoIva = "superreducidoB";

        //Act
        const resultado = obtenerIva(tipoIva);

        //Assert
        expect(resultado).toEqual(4);
    });

    
     it("Debería devolver 0 si el IVA es de tipo  superreducidoC", () => {

        //Arrange
        const tipoIva =  "superreducidoC";

        //Act
        const resultado = obtenerIva(tipoIva);

        //Assert
        expect(resultado).toEqual(0);
    });

    
     it("Debería devolver 0 si el IVA es de tipo  sinIva", () => {

        //Arrange
        const tipoIva = "sinIva";

        //Act
        const resultado = obtenerIva(tipoIva);

        //Assert
        expect(resultado).toEqual(0);
    });

});


describe("calcularPrecio", () => {
    it("Deberia calcular el precio total del IVA de un producto con IVA general", () => {

        //Arrange
     const cantidad = 1;
     const precio = 8;
     const tipoIva = 21;

        //Act
    const resultado = calcularPrecio(cantidad, precio, tipoIva);

        //Assert
    expect(resultado).toEqual(1.68);
    });


    it("Deberia calcular el precio total del IVA de un producto con IVA superreducidoA", () => {

        //Arrange
     const cantidad = 1;
     const precio = 8;
     const tipoIva = 5;

        //Act
    const resultado = calcularPrecio(cantidad, precio, tipoIva);

        //Assert
    expect(resultado).toEqual(0.4);
    });


    it("Deberia calcular el precio total del IVA de un producto con IVA superreducidoB", () => {

        //Arrange
     const cantidad = 1;
     const precio = 8;
     const tipoIva = 4;

        //Act
    const resultado = calcularPrecio(cantidad, precio, tipoIva);

        //Assert
    expect(resultado).toEqual(0.32);
    });


    it("Deberia calcular el precio total del IVA de un producto con IVA superreducidoC", () => {

        //Arrange
     const cantidad = 1;
     const precio = 8;
     const tipoIva = 0;

        //Act
    const resultado = calcularPrecio(cantidad, precio, tipoIva);

        //Assert
    expect(resultado).toEqual(0);
    });


      it("Deberia calcular el precio total del IVA de un producto sinIva", () => {

        //Arrange
     const cantidad = 1;
     const precio = 8;
     const tipoIva = 0;

        //Act
    const resultado = calcularPrecio(cantidad, precio, tipoIva);

        //Assert
    expect(resultado).toEqual(0);
    });
});

describe("calcularTicket", () => {
    it("Deberia devolver throw error si es undefined", () => {

        //Arrange
       const ticket: any = undefined;

        //Act
        const resultado = () => calculaTicket(ticket);

        //Assert
        expect(resultado).toThrowError("Algo está fallando");
    });


    it("Deberia devolver throw error si es null", () => {

        //Arrange
       const ticket: any = null;

        //Act
        const resultado = () => calculaTicket(ticket);

        //Assert
        expect(resultado).toThrowError("Algo está fallando");
    });
});

