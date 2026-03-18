import {LineaTicket, obtenerIva, ResultadoLineaTicket} from './iva';

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



