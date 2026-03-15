/*En este laboratorio vamos a hacer un programa que nos calcule el precio de un ticket de compra.
El ticket de compra tendrá una serie de líneas de ticket, cada una de ellas con un producto y una cantidad.
Cada producto tendrá un nombre, un precio y un tipo de IVA.

Esto son los tipos de IVA que vamos a tener:

Tipo de IVA	Porcentaje	Bienes y servicios que graba
General	21%	Más común y afecta a la mayoría de productos y servicios: electrónica, ropa, automóviles, mobiliario, etc.
Reducido	10%	Cultura, alimentación y transporte.
Superreducido A	5%	Nuevo tipo de IVA desde el 01/01/2023 aplicable a: aceites de oliva y de semillas y pastas alimenticias.
Superreducido B	4%	Alimentación esencial, libros o medicamentos.
Superreducido C	0%	Nuevo tipo de IVA desde el 01/01/2023 aplicable a: pan común, harina panificables, leches, quesos, huevos, frutas, verduras, hortalizas, legumbres, tubérculos y cereales.
Sin IVA	0%	Servicios de asistencia sanitaria o educación.
Cada producto va a tener esta interfaz:*/

type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

  const obtenerIva = (tipoIva: TipoIva): number => {
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
const calcularPrecio = (cantidad: number, precio: number, tipoIva: number): number => {
    const totalSinIva = (cantidad * precio);
    const totalConIva = totalSinIva * (1 + tipoIva / 100);
    const totalIva = totalConIva - totalSinIva;
  
    return totalIva;
};





/*Nota: El precio de los productos es el precio unitario, es decir, el precio de una unidad del producto.
Puedes añadir más productos si lo deseas.
La estructura inicial de la función para calcular el ticket sería la siguiente:*/


interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precionSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}


const calculaTicket = (lineasTicket: LineaTicket[]) => { 

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
      LineaTicket: [ 
    nombre,
    cantidad,
    precio,
    precioSinIva,
    tipoIva,
    precioConIva,
    totalIva
    ]}
  }
};

const resultadoLineaTicket = (resultado: LineaTicket[]): ResultadoLineaTicket[] => {
  calculaTicket(productos) = resultado = {nombre, cantidad, precionSinIva, tipoIva, precioConIva} 
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

const Final = (lineas: ResultadoLineaTicket[], total: ResultadoLineaTicket[], desgloseIva: TotalPorTipoIva[]): TicketFinal[] => {

}



/*Pistas:

Para calcular el IVA de un producto, se multiplica el precio del producto por el porcentaje de IVA y se divide entre 100.

Por ejemplo, si el precio del producto es 10 y el IVA es el 21%, el IVA será 2,1.

Para redondear un número a dos decimales, se puede utilizar el método toFixed de JavaScript.

Si necesitas crear funciones auxiliares, se recomienda crearlas. Así, la función principal será más sencilla de leer.*/