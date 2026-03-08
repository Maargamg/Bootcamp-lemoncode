import { calculaFlagDeSumaTotal, eliminaUltimoDigito, multiplicandoPorDosSaltandoUno, obtenerUltimoDigito, sumaDecenasUnidadesColeccion, sumaDigitos } from "./master-card.herlpers";

const estaLaTarjetaBienFormda = (numeroTarjeta: string) => {
if(!numeroTarjeta || numeroTarjeta.length !== 16 || isNaN(parseInt(numeroTarjeta))) {
    throw new Error("No has introducido un número de tarjeta válido");
}
};

interface TarjetaMasterCard {
    masterCardSinDigitoControl: string;
    ultimoDigito: number;
}

const separaDigitoControl = (numeroTarjeta: string): TarjetaMasterCard => ({
     ultimoDigito : obtenerUltimoDigito(numeroTarjeta),
     masterCardSinDigitoControl : eliminaUltimoDigito(numeroTarjeta),
});

const calculaFlagDeValidacion = (masterCardSinDigitoControl: string): number => {
    const masterCarddMultiplicaPorDos  = multiplicandoPorDosSaltandoUno(masterCardSinDigitoControl);
    const masterCardSumaDecenasUnidades = sumaDecenasUnidadesColeccion(masterCarddMultiplicaPorDos);
    const masterCardSumaTotal = sumaDigitos(masterCardSumaDecenasUnidades);

    return calculaFlagDeSumaTotal(masterCardSumaTotal);
}  


export const validaTarjetaMasterCard = (numeroTarjeta: string): boolean => {
estaLaTarjetaBienFormda(numeroTarjeta);
const {ultimoDigito, masterCardSinDigitoControl} = separaDigitoControl(numeroTarjeta);
const flagControlCalculado = calculaFlagDeValidacion(masterCardSinDigitoControl);


return flagControlCalculado === ultimoDigito;

};