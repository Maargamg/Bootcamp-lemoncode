import { calcularCambio } from "./cambio";
import { Cambio } from "./model";


describe("calcularCambio", () => {
        it("Deberia devolver throw si la entrada es undefined", () => {
            //Arrange
            const compra : any = undefined;
            const pago : any = undefined;
    
            //Act
            const resultado = () => calcularCambio(compra, pago);
    
            //Assert
            expect(resultado).toThrowError("Error");
        });
    
        it("Deberia devolver throw si la entrada es null", () => {
            //Arrange
            const compra: any = null;
            const pago : any = null;
    
            //Act
            const resultado = () => calcularCambio(compra, pago);
    
            //Assert
            expect(resultado).toThrowError("Error");
        });

        it("2.5€, usuario paga 50€ --> devolucióon [2 de 20, 1 de 5, 2 de 1, 1 de 0.5]", () => {
        //Arrange
        const compra = 2.5;
        const pago = 50;

        //Act
        const resultado = calcularCambio(compra, pago);

        //Assert
        const expected : Cambio[] = [
            {monedas: 20, cuantos: 2},
            {monedas: 5, cuantos: 1},
            {monedas: 2, cuantos: 1},
            {monedas: 0.5, cuantos: 1},
        ];

        expect(resultado).toEqual(expected);
        });

            it("4.82€, usuario paga 5.32€ --> devolución [1 moneda de 0.5]", () => {
                //Arrange
                const compra = 4.82;
                const pago = 5.32;
        
                //Act
                const resultado = calcularCambio(compra, pago);
                //Assert
                const expected : Cambio[] = [ {monedas: 0.5, cuantos: 1}];
                expect(resultado).toEqual(expected);
            });
        
        
});