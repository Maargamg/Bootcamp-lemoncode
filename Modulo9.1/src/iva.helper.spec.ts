import {calculaTicket} from './iva';
import { obtenerIva } from './iva.helper';

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

