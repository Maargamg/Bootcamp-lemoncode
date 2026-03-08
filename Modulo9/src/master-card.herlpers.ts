export const eliminaUltimoDigito = (numeroTarjeta : string): string => {
    if(!numeroTarjeta) {
        throw new Error("No se ha introducido una cadena");
    }

    return numeroTarjeta.slice(0, numeroTarjeta.length -1);
};

export const obtenerUltimoDigito = (numeroTarjeta : string): number => {
 if(!numeroTarjeta) {
    throw new Error("No se ha introducido una cadena");
 }


//return parseInt(numeroTarjeta[numeroTarjeta.length -1]);
return parseInt(numeroTarjeta.slice(-1));

};

export const multiplicandoPorDosSaltandoUno = (numeroTarjeta: string): number[] => {
if(!numeroTarjeta) {
    throw new Error("No se ha introducido una cadena");
}

let resultado: number [] = [];
let porDos = true;

for (let i = numeroTarjeta.length -1; i >= 0; i--) {
    const nuevoNumero = porDos
    ? parseInt(numeroTarjeta[i]) * 2
    :
    parseInt(numeroTarjeta[i]);

    resultado = [nuevoNumero, ...resultado];

    porDos = !porDos;


}
 return resultado;
};


const sumaDecenasUnidades = (numero: number): number => {
    if(numero < 10) return numero;

    const unidades = numero % 10;
    const decenas = Math.floor(numero / 10); 

    return unidades + decenas;
}

export const sumaDecenasUnidadesColeccion = (numeros: number[]): number[] => {
if(!numeros) {
    throw new Error("No se ha introducido una cadena");
}

return numeros.map(sumaDecenasUnidades);

};

export const sumaDigitos = (numeros: number[]): number => {
  if(!numeros) {
    throw new Error("No se ha introducido un número");
  }

  return numeros.reduce((acc, numeroActual) => acc + numeroActual, 0);
};

export const calculaFlagDeSumaTotal = (sumaTotal: number): number => {
    if(!sumaTotal){
        throw new Error("No se ha introducido un número");
    }

    return 10 - (sumaTotal % 10);
}
