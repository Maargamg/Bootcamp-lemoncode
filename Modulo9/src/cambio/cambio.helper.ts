import { Cambio } from "./model";


interface Resultado {
    cuantos: number;
    restoCantidad: number;
}

export const calcularEntrada = (cantidad:number, billeteMoneda: number): Resultado => {
if(!cantidad || !billeteMoneda) {
    throw new Error("No implementado");
}

const cuantos = Math.floor(cantidad / billeteMoneda);
const restoCantidad = cantidad % billeteMoneda;

return {cuantos, restoCantidad};
};