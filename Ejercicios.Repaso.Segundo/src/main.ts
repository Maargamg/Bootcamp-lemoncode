//Más ejercicios básicos

//Resta, multiplicación y división: Pide dos números y muestra: La resta, La multiplicación, La división.
const resta = (a: number, b: number): number => {
    return a - b;
};

const multiplicacion = (a: number, b: number): number => {
    return a * b; 
};

const division = (a : number, b: number): number => {
    return a / b;
};

console.log(resta(6, 3));
console.log(multiplicacion(3, 2));
console.log(division(25, 5));


//Número par o impar: Pide un número entero e indica si es par o impar.

const numeroParImpar = (numero: number): string => {
    if( numero % 2 === 0) {
        return "Par";
    } else{
     return "Impar";
    }
};

console.log(numeroParImpar(8));

//Otra forma:

const numeroParEImpar = (numero: number): string => {
 return numero % 2 === 0 ? "Es par" : "Es impar";
};
 console.log(numeroParEImpar(7));



//Mayor de tres números: Pide tres números y muestra cuál es el mayor.

//Math.max
const numeroMayor = (a: number, b: number, c : number): number => {
    return Math.max(a, b, c);
};

console.log(numeroMayor(5, 2, 6));

//if/else:
const numerosMayor = (a: number, b: number, c: number): number => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};

console.log(numeroMayor(5, 2, 6)); // 6

/*Calcular el área de un rectángulo:Pide la base y la altura de un rectángulo y muestra su área.
Fórmula: Área = base × altura*/

const areaRectangulo = ( base: number, altura: number): number => {
    return base * altura;
};

console.log(areaRectangulo(9, 3));


/*Conversión de grados Celsius a Fahrenheit
Pide una temperatura en grados Celsius y conviértela a Fahrenheit.
Fórmula: F = (C × 9/5) + 32*/

const conversionGrados = (C: number): number => {
    return (C * 9/5) + 32;
};

console.log(conversionGrados(40));


/*Calculadora simple: Pide dos números y una operación (+, -, *, /) y muestra el resultado según la operación
elegida.*/

const calculadora = (a: number, b: number, operacion : string): number | string => {
 switch(operacion) {
    case "+" : return a + b;
    case "-" : return a - b;
    case "*" : return a * b;
    case "/" : return a / b;
    default : return "Operación no valida";
 }
}; 

console.log(calculadora(10, 5, "+"));



//Calcular el salario: Pide el número de horas trabajadas y el precio por hora. Calcula y muestra el salario total

const calcularSalario = ( horas: number, precioHora: number): number => {
    return horas * precioHora;
};
console.log(calcularSalario(40, 8));


/*Descuento en una compra: Pide el precio de un producto.
Si el precio es mayor a 100, aplica un 10% de descuento
Si no, muestra el precio sin descuento*/

const compra = (precio: number): number => {
    if (precio > 100) {
       return precio - (precio * 0.10);
    } else {
        return precio;
    }
};

console.log(compra(120));
console.log(compra(80));

/*/Cálculo de una factura: Pide la cantidad total de una compra y muestra el desglose de una factura:
Subtotal.
Precio iva (por ejemplo el 21%).
Total (subtotal + iva).*/

const factura = (subtotal: number): { subtotal: number, iva: number, total: number } => {
   const iva = subtotal * 0.21;
   const total = subtotal + iva;
  return {subtotal, iva, total};
};

const facturaNueva = factura(100);
console.log(`Subtotal: ${facturaNueva.subtotal}€`);
console.log(`IVA(21%): ${facturaNueva.iva}€`);
console.log(`Total: ${facturaNueva.total}€`);

//Como el anterior: Ten en cuenta que si es mayor a 100 aplica un 10% de descuento. Desglosa el detalle de la factura.

const controlGasto = (subtotal: number) : {subtotal: number, IVA: number, descuento: number, total: number } => {
    const IVA = subtotal * 0.21;
    let total = subtotal + IVA;
    let descuento = 0;
      if (total > 100) {
     descuento = total * 0.10;
     total = total - descuento;
 }

    return { subtotal, IVA, descuento, total};
};

const facturaSupermercado = controlGasto(200);
console.log(`Subtotal: ${facturaSupermercado.subtotal}€`);
console.log(`IVA(21%): ${facturaSupermercado.IVA}€`);
console.log(`Descuento: ${facturaSupermercado.descuento}€`);
console.log(`Total: ${facturaSupermercado.total}€`);


/*Intercambiar dos valores:
Pide dos variables A y B y muestra sus valores intercambiados.
Ejemplo:
Antes: A = 5, B = 10 Después: A = 10, B = 5*/

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b);


//Calcular el promedio de dos notas: Pide dos notas y muestra el promedio. Indica si el promedio es aprobado (≥ 5) o suspendido.

const calcularPromedio = (nota:{ [asignatura: string]: number }): string => {
  const valores = Object.values(nota); 
    const total = valores.reduce((acum, val) => acum + val, 0);
    const promedio = total / valores.length;
    return promedio >= 5 
        ? `Promedio: ${promedio.toFixed(2)} → Has aprobado ✅`
        : `Promedio: ${promedio.toFixed(2)} → Has suspendido ❌`;
};

const boletin = {
    lengua: 8,
    matematicas: 9,
    ingles: 7,
    biologia: 8
};

console.log(calcularPromedio(boletin));


//Número dentro de un rango: Pide un número e indica si está entre 1 y 100 (incluidos).

const comprobarNumero = (numero: number): string => {
    if (numero >= 1 && numero <= 100) {
        return `El número ${numero} está`;
    } else {
        return `El número ${numero} no está`;
    }
};

console.log(comprobarNumero(3));
console.log(comprobarNumero(105));

//Comparar dos edades: Pide la edad de dos personas e indica quién es mayor o si tienen la misma edad.

const comprobarEdades = (edadAna: number, edadMaria: number): string => {
if (edadAna > edadMaria) {
    return `Ana tiene ${edadAna}, es mayor que Maria`;
} else if (edadMaria > edadAna) {
  return `Maria tiene ${edadMaria}, es mayoe que Ana`;
 } else {
  return `Tienen la misma edad`;
}
};

console.log(comprobarEdades(20, 35));



/*Convertir minutos a horas y minutos:
Pide una cantidad de minutos y conviértela a horas y minutos.
Ejemplo: 130 minutos → 2 horas y 10 minutos*/

const convertirAMinutos = (minutos: number): string => {
    const horas = Math.floor(minutos / 60); 
    const minutosRestantes = minutos % 60;

    return `${minutos} minutos son ${horas} horas y ${minutosRestantes} minutos`;
};


console.log(convertirAMinutos(130)); 
console.log(convertirAMinutos(75)); 
console.log(convertirAMinutos(45));  


/*Clasificación de un número
Pide un número e indica si es:
Menor que 10
Entre 10 y 100
Mayor que 100*/

const numeroSobreCien = (numero: number): string => {
    if (numero < 10) {
        return `El número ${numero} es menor que 10`;
    } else if (numero >= 10 && numero <= 100) {
        return `El número ${numero} está entre 10 y 100`;
    } else {
        return `El número ${numero} es mayor que 100`;
    }
};

console.log(numeroSobreCien(5));   
console.log(numeroSobreCien(50));   
console.log(numeroSobreCien(150));  

/*Calcular el perímetro de un cuadrado
Pide el lado de un cuadrado y muestra su perímetro.
Fórmula: Perímetro = 4 × lado*/

const perimetroDeUnCuadrado = (lado: number): number => {
  return  4 * lado;
};
console.log(perimetroDeUnCuadrado(5));


/* Validar contraseña simple:
Pide una contraseña y verifica si es igual a "1234". Muestra Acceso permitido o Acceso
denegado.*/

const validarContraseña = (contraseña: number): string => {
    if (contraseña === 1234) {
        return "Acceso permitido"
    } else {
        return "Acceso denegado"
    }
};

console.log(validarContraseña(1234));
console.log(validarContraseña(1111));



////////////////////////////////////////////////////////////////////////////


//Ejercicios para modificar el DOM:




/*Ejercicio 1:
//Cambiar texto de un párrafo: Crea un párrafo con un id. Al pulsar un botón, cambia su texto por otro diferente:
const parrafo = document.getElementById("parrafo");
if (parrafo !== undefined && parrafo !== null && parrafo instanceof HTMLParagraphElement) {
 const boton = document.getElementById("boton");
 if (boton !== null && boton !== undefined && boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", () => {
    parrafo.textContent = "He conseguido resolver el ejercicio :P";
})
 }
};*/






/*Ejercicio 2:
//Cambiar el color de un texto: Al hacer clic en un botón, cambia el color de un texto a rojo:

const textoHtml = document.getElementById("texto");
if (textoHtml !== null && textoHtml !== undefined && textoHtml instanceof HTMLParagraphElement){  
const cambiarColor = document.getElementById("botonRojo"); 
 if (cambiarColor !== null && cambiarColor !== undefined && cambiarColor instanceof HTMLButtonElement) {
    cambiarColor.addEventListener("click", () => {
    textoHtml.style.color = "#FF0000";
    })
}
};*/





/*Ejercicio 3:
//Mostrar un mensaje oculto: Crea un texto oculto (display: none). Al pulsar un botón,haz que el texto se muestre:

const mostrarTexto = document.getElementById("textoOculto");
if (mostrarTexto !== null && mostrarTexto !== undefined && mostrarTexto instanceof HTMLParagraphElement) {
    const botonTexto = document.getElementById("mostrar");
    if(botonTexto !== null && botonTexto !== undefined && botonTexto instanceof HTMLButtonElement) {
        botonTexto.addEventListener("click", () => {
            mostrarTexto.style.display = "block" ;
        })
    }
};*/



/*Ejercicio 4:
//Ocultar un elemento: Al pulsar un botón, oculta un párrafo de la página:
const ocultarTexto = document.getElementById("parrafo");
    if(ocultarTexto !== null && ocultarTexto !== undefined && ocultarTexto instanceof HTMLParagraphElement) {
        const botonOcultar = document.getElementById("boton");
        if(botonOcultar !== null && botonOcultar !== undefined && botonOcultar instanceof HTMLButtonElement){
            botonOcultar.addEventListener("click", () => {
                ocultarTexto.style.display = "none";
            })
        }
    };*/


/* Ejercicio 5:
//Cambiar el tamaño de la letra: Al hacer clic en un botón, aumenta el tamaño de la letra de un texto:

const cambiarTamaño = document.getElementById("parrafo");
if(cambiarTamaño !== null && cambiarTamaño !== undefined && cambiarTamaño instanceof HTMLParagraphElement) {
    const botonTamaño = document.getElementById("boton");
    if(botonTamaño !== null && botonTamaño !== undefined && botonTamaño instanceof HTMLButtonElement){
        botonTamaño.addEventListener("click", () => {
            cambiarTamaño.style.fontSize = "50px";
        })
    }
} ;*/


/*Ejercicio 6:
//Cambiar el texto usando un input: Crea un input y un botón. Al pulsar el botón, el texto del input debe aparecer en un párrafo:

const añadirTexto = document.getElementById("parrafo");
if(añadirTexto !== null && añadirTexto !== undefined && añadirTexto instanceof HTMLParagraphElement){
    const inputTexto = document.getElementById("input");
    if(inputTexto !== null && inputTexto !== undefined && inputTexto instanceof HTMLInputElement){
        const botonAñadirTexto = document.getElementById("boton");
        if(botonAñadirTexto !== null && botonAñadirTexto !== undefined && botonAñadirTexto instanceof HTMLButtonElement) {
            botonAñadirTexto.addEventListener("click", () => {
                añadirTexto.textContent = inputTexto.value;
            })
        }
    }
};*/

/*Ejercicio 7:
//Cambiar una imagen: Muestra una imagen. Al pulsar un botón, cambia la imagen por otra diferente.

const cambiarFoto = document.getElementById("foto");
if(cambiarFoto !== null && cambiarFoto !== undefined && cambiarFoto instanceof HTMLImageElement){
    const cambiarBoton = document.getElementById("boton");
    if(cambiarBoton !== null && cambiarBoton !== undefined && cambiarBoton instanceof HTMLButtonElement){
        cambiarBoton.addEventListener("click", () => {
            cambiarFoto.src = "src/img/cat-5361405_1920.jpg";
        })
    }
};*/

/*Ejercicio 8:
//Cambiar el fondo de la página: Al pulsar un botón, cambia el color de fondo del body.

const cambiarColorFondo = document.getElementById("boton");
 if (cambiarColorFondo !== null && cambiarColorFondo !== undefined && cambiarColorFondo instanceof HTMLButtonElement){
    cambiarColorFondo.addEventListener("click", () => {
        document.body.style.backgroundColor = "#FF69B4";
    })
 };*/



/*Ejercicio 9:
//Activar y desactivar una clase: Crea un botón que añada o quite una clase CSS a un elemento.

const divClase = document.getElementById("div");
if (divClase !== null && divClase !== undefined && divClase instanceof HTMLDivElement){
const modificarClases = document.getElementById("boton");
 if(modificarClases !== null && modificarClases !== undefined && modificarClases instanceof HTMLButtonElement ) {
    modificarClases.addEventListener("click", () => {
     divClase.classList.toggle("activo");
    })
 }};*/


/*Ejercicio 10:
//Contador simple (sin bucles):Crea un número inicial (por ejemplo 0). Cada vez que se pulse un botón, el número debe aumentar en 1 y mostrarse en pantalla.

const marcador = document.getElementById("contador");
const sumar = document.getElementById("sumar");
let inicio = 0;
if(marcador !== null && marcador !== undefined && marcador instanceof HTMLDivElement && 
    sumar !== null && sumar !== undefined && sumar instanceof HTMLButtonElement){
    sumar.addEventListener("click", () => {
      inicio++;
    marcador.textContent = inicio.toString(); 
    })
};*/


/*Ejercicio 11:
//Cambiar texto al pasar el ratón: Cuando el usuario pase el ratón sobre un texto (mouseover), cambia su contenido. Cuandosalga (mouseout), vuelve al texto original.
const cambiarTextoMouse = document.getElementById("texto");
if (cambiarTextoMouse !== null && cambiarTextoMouse !== undefined && cambiarTextoMouse instanceof HTMLParagraphElement) {
    const textOriginal: string = cambiarTextoMouse.textContent ?? "";
    cambiarTextoMouse.addEventListener("mouseover", () => {
       cambiarTextoMouse.textContent = "¿Tú no haces caso no?";
    });
      cambiarTextoMouse.addEventListener("mouseout", () => {
        cambiarTextoMouse.textContent = textOriginal;
    })
  
};*/


/*Ejercicio 12:
//Validar un input vacío: Crea un input y un botón. Si el usuario pulsa el botón sin escribir nada, muestra un mensajede error.
const validarBoton = document.getElementById("boton");
const input = document.getElementById("input");
const textoInput = document.getElementById("texto");
if (validarBoton !== null && validarBoton !== undefined && validarBoton instanceof HTMLButtonElement &&
    input !== null && input !== undefined && input instanceof HTMLInputElement &&
    textoInput !== null && textoInput !== undefined && textoInput instanceof HTMLParagraphElement){
    validarBoton.addEventListener("click", () => {
    if (input.value === ""){
        textoInput.textContent = "ERROR: El texto introducido no es valido";
    }else{
       textoInput.textContent = "Formato valido";
    }
    })
};*/

/*Ejercicio 13:
Cambiar texto según una condición:
Crea un botón que:
Muestre “Encendido” si el texto actual es “Apagado”
Muestre “Apagado” si el texto actual es “Encendido”

const boton = document.getElementById("boton");
if ( boton !== null && boton !== undefined && boton instanceof HTMLButtonElement){
    boton.addEventListener("click", () => {
        if(boton.textContent === "Apagado") {
            boton.textContent = "Encendido";
        } else {
            boton.textContent = "Apagado";
        }
    })
};*/


/*Ejercicio 14:
//Cambiar el contenido de un div: Crea un div vacío. Al pulsar un botón, añade texto dentro del div.

const boton = document.getElementById("boton");
const textoDiv = document.getElementById("div");
if (boton !== null && boton !== undefined && boton instanceof HTMLButtonElement &&
    textoDiv !== null && textoDiv !== undefined && textoDiv instanceof HTMLDivElement){
        boton.addEventListener("click", () => {
            textoDiv.textContent = "Texto añadido";
        })
    };*/


/*Ejercicio 15:
//Mostrar la hora actual: Al pulsar un botón, muestra la hora actual dentro de un párrafo usando Date.

const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");
if( boton !== null && boton !== undefined && boton instanceof HTMLButtonElement && 
    parrafo !== null && parrafo !== undefined && parrafo instanceof HTMLParagraphElement) {
        boton.addEventListener("click", () => {
            const mostrarHora = new Date();
            const horas = mostrarHora.getHours().toString().padStart(2, "0");
            const minutos = mostrarHora.getMinutes().toString().padStart(2, "0");
            const segundos = mostrarHora.getSeconds().toString().padStart(2, "0");
            parrafo.textContent = horas + ":" + minutos + ":" + segundos ;
        });
    }*/


/*Ejercicio 16:
//Cambiar el texto de varios elementos (sin bucles): Crea dos o tres elementos con distintos id. Al pulsar un botón, cambia el texto de cada uno manualmente.

const boton = document.getElementById("boton");
const textoUno = document.getElementById("texto1");
const textoDos = document.getElementById("texto2");
if (boton !== null && boton !== undefined && boton instanceof HTMLButtonElement && 
    textoUno !== null && textoUno !== undefined && textoUno instanceof HTMLParagraphElement &&
     textoDos !== null && textoDos !== undefined && textoDos instanceof HTMLParagraphElement) {
        boton.addEventListener("click", () => {
            textoUno.textContent = "Frases cambiadas";
            textoDos.textContent = "El ejercicio está bien";
        })
     };*/



/*Ejercicio 17:
//Cambiar atributo disabled: Crea un botón deshabilitado. Al pulsar otro botón, habilítalo.

const habilitar = document.getElementById("Habilitar");
const deshabilitar = document.getElementById("Deshabilitar");
if( habilitar !== null && habilitar !== undefined && habilitar instanceof HTMLButtonElement &&
    deshabilitar !== null && deshabilitar !== undefined && deshabilitar instanceof HTMLButtonElement) {
        habilitar.addEventListener("click", () => {
            deshabilitar.disabled = false;
        });
    deshabilitar.addEventListener("click", () => {
            deshabilitar.disabled = true;
        });
    }*/


/*Ejercicio 18:
//Cambiar el placeholder de un input: Al pulsar un botón, cambia el texto del placeholder de un input.

const boton = document.getElementById("boton");
const input = document.getElementById("input");
if( boton !== null && boton !== undefined && boton instanceof HTMLButtonElement &&
    input !== null && input !== undefined && input instanceof HTMLInputElement) {
        boton.addEventListener("click", () =>{
            input.placeholder = "Placeholder modificado";
        })
    };*/

/*Ejercicio 19:
//Cambiar el texto del propio botón Al hacer clic en un botón, cambia su propio texto.

const boton = document.getElementById("boton");
if( boton !== null && boton !== undefined && boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", () => {
        boton.textContent = "Mismo botón diferente texto"
    })
};*/

/* Ejercicio 20:
// Confirmación visual: Al pulsar un botón, muestra un mensaje y cambia su color a verde indicando que la acción fue correcta.

const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
if(boton !== null && boton !== undefined && boton instanceof HTMLButtonElement &&
    texto !== null && texto !== undefined && texto instanceof HTMLParagraphElement){
        boton.addEventListener("click", () => {
            texto.style.color = "green";
        })
    };*/
