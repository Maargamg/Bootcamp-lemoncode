import {LineaTicket, ResultadoLineaTicket, TotalPorTipoIva, TipoIva } from './modelo';

export const tiposIva: TipoIva[] = [
  "general",
  "reducido",
  "superreducidoA",
  "superreducidoB",
  "superreducidoC",
  "sinIva"
]


export const obtenerIva = (tipoIva: TipoIva): number => {
 switch (tipoIva) {
 case "general": return 21;
 case "reducido": return 10;
 case "superreducidoA": return 5;
 case "superreducidoB": return 4;
 case "superreducidoC": return 0;
 case "sinIva": return 0;
 default: return 0;
 }
}; 

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
  const resultadoDesgloseIva: TotalPorTipoIva[] = tiposIva.map((tipoIva) => {
    const listadoProductosPorIva = lineasTicket.filter(lineaTicket => lineaTicket.producto.tipoIva === tipoIva);

    return {
      tipoIva: tipoIva,
      cuantia: obtenerIvaProducto(listadoProductosPorIva)
    }
  })

  return resultadoDesgloseIva.filter(desglose => desglose.cuantia > 0);
};

