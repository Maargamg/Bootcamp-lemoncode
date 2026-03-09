import { Cambio } from "./model";
import { calcularEntrada } from "./cambio.helper";
import { calculaFlagDeSumaTotal } from "../master-card.herlpers";


const arrayBilletesMonedas = [50, 20, 10, 5, 2, 1, 0.5, 0.05, 0.02, 0.01];

export const calcularCambio = (compra: number, pago: number): Cambio[] => {
if(!compra || !pago) {
 throw new Error("Error");
}

const cambio = pago - compra;
let cambioRestante = cambio;

let resultado: Cambio[] = arrayBilletesMonedas.reduce((acc: Cambio[], billeteMoneda: number) => {
if (cambioRestante === 0) {
    return acc;
}

const {cuantos, restoCantidad } = calcularEntrada(cambioRestante, billeteMoneda);
cambioRestante = restoCantidad;

return cuantos > 0 
? [...acc, {monedas: billeteMoneda, cuantos}]
: acc;
},
[]
);

return resultado;
};




/*Ejercicio implementado con bucle for:
for(let i = 0; i < arrayBilletesMonedas.length; i++) {
    const billeteMoneda = arrayBilletesMonedas[i];
    const {cuantos, restoCantidad} = calcularEntrada(cambioRestante, billeteMoneda);
   
    if(cuantos > 0) {
        resultado = [...resultado, {monedas: billeteMoneda, cuantos}]
        cambioRestante = restoCantidad;
    }

    if(cambioRestante === 0) {
        break;
    }
}
   return resultado; 
};*/