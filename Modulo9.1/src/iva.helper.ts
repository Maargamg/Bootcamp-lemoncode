import {LineaTicket, obtenerIva, ResultadoLineaTicket, TotalPorTipoIva } from './iva';

export const calcularIva = (lineasTicket: LineaTicket[]): number => {
const subtotalAcumulado = lineasTicket.reduce((acc, lineaTicket) => {
    const subtotal = lineaTicket.producto.precio * lineaTicket.cantidad;
    acc = acc + subtotal;
    return acc;
}, 0);

return subtotalAcumulado;
};


export const obtenerIvaProducto = (lineasTicket: LineaTicket[]): number => {
    const totalIva = lineasTicket.reduce((acc, lineaTicket) => {
    const subtotal = lineaTicket.producto.precio * lineaTicket.cantidad;
    const iva = obtenerIva(lineaTicket.producto.tipoIva);
    const ivaProducto = subtotal * iva / 100;
    acc += ivaProducto;
    return acc;
    }, 0);

    return totalIva;
};

export const obtenerLineas = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
    const resultado: ResultadoLineaTicket[] = lineasTicket.map((lineaTicket) => {
        const subtotal = lineaTicket.producto.precio * lineaTicket.cantidad;
        const iva = obtenerIva(lineaTicket.producto.tipoIva);
        const ivaProducto = subtotal * iva / 100;
        const total = subtotal + ivaProducto;

        return {
            nombre: lineaTicket.producto.nombre,
            cantidad: lineaTicket.cantidad,
            precionSinIva: subtotal,
            tipoIva: lineaTicket.producto.tipoIva,
            precioConIva: total,
      }
    });

    return resultado;
};



export const calcularDesgloseIva = (lineasTicket: LineaTicket[]): TotalPorTipoIva[] => {
  const resultadoDesglose: TotalPorTipoIva[] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    const total = lineasTicket[i].producto.precio * lineasTicket[i].cantidad;
    const iva = obtenerIva(lineasTicket[i].producto.tipoIva);
    const cuantia = total * iva / 100;
    const indice = resultadoDesglose.findIndex(linea => linea.tipoIva === lineasTicket[i].producto.tipoIva);
    if (indice >= 0) {
      resultadoDesglose[indice].cuantia += cuantia;
    } else {
      resultadoDesglose.push({ tipoIva: lineasTicket[i].producto.tipoIva, cuantia });
    }
  }

  return resultadoDesglose;
};

/*intentos:
export const calcularDesgloseIva = (lineasTicket: LineaTicket[]): TotalPorTipoIva[] => {
  const resultadoDesglose = lineasTicket.reduce((acc, lineaTicket, indice) => acc + lineaTicket.producto.tipoIva [indice], 0);
  return resultadoDesglose;
}
  
export const calcularDesgloseIva = (lineasTicket: LineaTicket[]): TotalPorTipoIva[] => {
const desglose = lineasTicket.reduce((acc, lineaTicket) => {
const total = lineaTicket.producto.tipoIva;
total++;
return{
  tipoIva: lineaTicket.producto.tipoIva,
  cuantia: ,
};
})
 return desglose;
}*/
