type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";


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

interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

//Además, cada línea del ticket estará compuesta por un producto y una cantidad, y se define mediante la siguiente interfaz:

interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

//A continuación, se muestra un ejemplo de productos de entrada:

const productos: LineaTicket[] = [
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


interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cantidad : number;
}

interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

//TotalPorTipoIva[]
export const calcularPrecio = (cantidad: number, precio: number, tipoIva: number): number => {
    const totalSinIva = (cantidad * precio);
    const totalConIva = totalSinIva * (1 + tipoIva / 100);
    const totalIva = totalConIva - totalSinIva;
  
    return Number(totalIva.toFixed(2));
};



interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precionSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}


export const calculaTicket = (lineasTicket: LineaTicket[]) => { 
  if(!lineasTicket) {
    throw new Error("Algo está fallando");
  }

  for (let i = 0; i < lineasTicket.length; i++) {
    const linea = lineasTicket[i];
    const nombre = linea.producto.nombre;
    const cantidad = linea.cantidad;
    const precio = linea.producto.precio;
    const tipoIva = linea.producto.tipoIva;

    

    const precioSinIva = cantidad * precio;
    const precioConIva = precioSinIva * (1 + (obtenerIva(tipoIva))/ 100);
    const totalIva = Number((precioConIva - precioSinIva).toFixed(2));


    
  
    return {
      LineaTicket:  
    nombre,
    cantidad,
    precio,
    precioSinIva,
    tipoIva,
    precioConIva,
    totalIva
    }
  }
};

export const resultadoLineaTicket = (resultado: LineaTicket[]): ResultadoLineaTicket[] => {
 // calculaTicket(productos) = resultado = {nombre, cantidad, precionSinIva, tipoIva, precioConIva} 
}




/*La función calculaTicket devolverá un ticket que contendrá la siguiente información:

Por cada producto queremos el nombre, la cantidad, el precio sin IVA, el tipo de IVA y el precio con IVA.
Tendremos la siguiente interfaz:*/



/*En cuanto a los totales:
El total sin IVA.
El IVA.
Un desglose del total por tipo de IVA, es decir, la suma de los importes correspondientes a cada tipo de IVA.
El total del ticket, incluyendo el IVA.
Para esto tendremos las siguientes interfaces:*/
interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

export const Final = (lineas: ResultadoLineaTicket[], total: ResultadoLineaTicket[], desgloseIva: TotalPorTipoIva[]): TicketFinal[] => {
//TODO
};

