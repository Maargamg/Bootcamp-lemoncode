import { calcularEntrada } from "./cambio.helper";

describe ("calcularEntrada", () => {
    it("Deberia devolver throw si la entrada es undefined", () => {
        //Arrange
        const cantidad : any = undefined;
        const billeteMoneda : any = undefined;

        //Act
        const resultado = calcularEntrada(cantidad, billeteMoneda);

        //Assert
        expect(resultado).toThrowError("No implementado");
    });

    it("Deberia devolver throw si la entrada es null", () => {
        //Arrange
        const cantidad : any = null;
        const billeteMoneda : any = null;

        //Act
        const resultado = () => calcularEntrada(cantidad, billeteMoneda);

        //Assert
        expect(resultado).toThrowError("No implementado");
    });


        it("Deberia devolver 2.5, billete 50 --> {cuantos: 0, restoCantidad: 2.5}", () => {
        //Arrange
        const cantidad = 2.5;
        const billeteMoneda = 50;

        //Act
        const resultado = calcularEntrada(cantidad, billeteMoneda);

        //Assert
        const expected = {cuantos: 0, restoCantidad: 2.5};
        expect(resultado).toEqual(expected);
    });

            it("Deberia devolver 7.25, billete 5 --> {cuantos: 1, restoCantidad: 2.25}", () => {
        //Arrange
        const cantidad = 7.25;
        const billeteMoneda = 5;

        //Act
        const resultado = calcularEntrada(cantidad, billeteMoneda);

        //Assert
        const expected = {cuantos: 1, restoCantidad: 2.25};
        expect(resultado).toEqual(expected);
    });

    
            it("Deberia devolver 2.5, billete 2 --> {cuantos: 1, restoCantidad: 0.5}", () => {
        //Arrange
        const cantidad : number = 2.5;
        const billeteMoneda : number = 2;

        //Act
        const resultado = calcularEntrada(cantidad, billeteMoneda);

        //Assert
        const expected= {cuantos: 1, restoCantidad: 0.5};
        expect(resultado).toEqual(expected);
    });


});