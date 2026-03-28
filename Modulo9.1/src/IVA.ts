import {calcularDesgloseIva, calcularIva, obtenerIvaProducto, obtenerLineas} from './IVA.helper';
import {LineaTicket} from './modelo';







export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];





export const calculaTicket = (lineasTicket: LineaTicket[]) => { 
  if(!lineasTicket) {
    throw new Error("Algo está fallando");
  }
const subtotal = calcularIva(lineasTicket);
const ivaAcc = obtenerIvaProducto(lineasTicket);

return {
  lineas: obtenerLineas(lineasTicket),
  desgloseIva: calcularDesgloseIva(lineasTicket),
  total: {
  totalSinIva: subtotal,
  totalIva: ivaAcc,
  totalConIva: subtotal + ivaAcc,
  }
}
};


console.log(calculaTicket(productos));



