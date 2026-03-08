import {validaTarjetaMasterCard} from './master-card.vaidator'



/*
Tarjetas válidas:
5506927427317625;
5553042241984105;
5555553753048194;
5555555555554444;

Tarjetas No Válidas:
5506927627317626;
5553042241944106;
5525553753048195;
5554555555554445;
*/

describe ("validaTarjetaMasterCard", () => {
    it("Deberia devolver throw error si es undefined", () => {
        //Arrange
        const numero : any = undefined;

        //Act
        const resultado = () => validaTarjetaMasterCard(numero);

        //Assert
        expect(resultado).toThrowError("No has introducido un número de tarjeta válido");
    });

    it("Deberia devolver throw error si es null", () => {
        //Arrange
        const numero : any = null;

        //Act
        const resultado = () => validaTarjetaMasterCard(numero);

        //Assert
        expect(resultado).toThrowError("No has introducido un número de tarjeta válido");
    });

    it("Deberia devolver throw error si la entrada no se puede convertir a un número", () => {
        //Arrange
        const numero = "abalkajdañlkdjseo";

        //Act
        const resultado = () => validaTarjetaMasterCard(numero);

        //Assert
        expect(resultado).toThrowError("No has introducido un número de tarjeta válido");
    });


       it("Deberia devolver throw error si la entrada no tiene 16 dígitos", () => {
        //Arrange
        const numeroTarjeta = "123456789";

        //Act
        const resultado = () => validaTarjetaMasterCard(numeroTarjeta);

        //Assert
        expect(resultado).toThrowError("No has introducido un número de tarjeta válido");
    });


    it.each([
        ["5506927427317625", true],
        ["5553042241984105", true ],
        ["5555553753048194", true ],
        ["5555555555554444", true],
        ["5506927627317626", false],
        ["5553042241944106", false],
        ["5525553753048195", false],
   ])(

    "Si la entrada es %s debería devolver %s" ,
    (numeroTarjeta: string, valorEsperado: boolean) => {

//Arrange
//Act
const resultado = validaTarjetaMasterCard(numeroTarjeta);

//Assert
expect(resultado).toBe(valorEsperado);
 });
});