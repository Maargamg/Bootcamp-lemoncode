//Funciones básicas
//Implementa una función que muestre por consola “Hola Mundo”.

const saludos = "Hola mundo";
console.log(saludos);

//Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.

//Lo he hecho de dos formas una añadiendole más complejidad y otra más sencilla para prácticar.
interface Persona {
  nombre1: string,
  nombre2: string,
  apellidos1: string,
  apellidos2: string
};

const datosPersona: Persona = {
 nombre1: "Marc",
 apellidos1: "Campi Jimenez",
 nombre2: "Margarita",
 apellidos2: "Moreno Garrido"
}

const saludo = (datosPersona: Persona): void => {
  console.log(`Hola ${datosPersona.nombre1} ${datosPersona.apellidos1}`);
  console.log(`Hola ${datosPersona.nombre2} ${datosPersona.apellidos2}`);
};

saludo(datosPersona);


const helloName = (name : string) => {
console.log(`Hola ${name}`);
};

helloName("Marc");
helloName("Marga");


//Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

const convertirAMayusculas = (texto: string): string => {
return texto.toUpperCase();
};

const sustantivos : string [] = [
"mesa", "silla", "puerta", "casa", "biblioteca", "libreta"
];

const sustantivosAMayusculas = sustantivos.map(convertirAMayusculas);
console.log(sustantivosAMayusculas);



//Implementa una función que dado un string como parámetro devuelva el string en minúsculas.

const convertirAMinusculas = (txto: string): string => {
 return txto.toLocaleLowerCase();
};

const nuevosSustantivos : string [] = [
 "VACA", "LAPIZ", "VACIO", "AGUA"
];

const nuevosSustantivosAMinusculas = nuevosSustantivos.map(convertirAMinusculas);
console.log(nuevosSustantivosAMinusculas);

//Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.

const sumar = (a: number, b: number) => {
  return a + b;
};

const resultado = sumar(2, 4);
console.log(resultado);

//Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

const argumentos = (a: string, b: string, c: string) => {
  return a + b + c;
};

const resultadoEsperado = argumentos ("casa", "puerta", "nevera");
console.log(resultadoEsperado);


//Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’inicializada a null.

const agregarId = (objeto: any) => {
  objeto.id = null;
};

const datosPersonales = {
nombre : "Marc",
apellido : "Campi",
ciudad : "Puigcerdà"
};

agregarId(datosPersonales);
console.log(datosPersonales);


//Funciones con if/else, switches y comprobaciones


//Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .

const parametroCualquiera = (valor: any): boolean => {
  return valor == null || valor == undefined;
};

console.log(parametroCualquiera(null));
console.log(parametroCualquiera(undefined));
console.log(parametroCualquiera(0));
console.log(parametroCualquiera("Margarita"));

//Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.


//Con string para que me debuelva la palabra.
const comprobarNumero = (numero: number): string => {
  if( numero < 0) {
    return "Es negativo";
  } else {
    if(numero > 0) {
      return "Es positivo";
    }else {
      return "Cero";
    }}
};
console.log(comprobarNumero(1));
console.log(comprobarNumero(-2));
console.log(comprobarNumero(0));

//Usando boolean para que me diga si es true si el número es positivo o si es false si el número es negativo.

const comporbarNumeroPeroConBoolean = (numeros : number): boolean => {
   if (numeros > 0){
    return true;
   } else {
    return false;
   }
};

console.log(comporbarNumeroPeroConBoolean(2));
console.log(comporbarNumeroPeroConBoolean(-3));
console.log(comporbarNumeroPeroConBoolean(0));

//Una manera que me he encontrado por internet:

const esPositivo = (numero: number): boolean => Math.sign(numero) === 1;

console.log(esPositivo(5));
console.log(esPositivo(-3));
console.log(esPositivo(0));




//Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.

const comprobarNumeroCien = (dato: number): string => {
  if(dato === 100) {
   return "Cien";
  } else if(dato < 100) {
   return "Menor que cien";
    }else {
      return "Mayor que cien";
  }
}; 

console.log(comprobarNumeroCien(15));
console.log(comprobarNumeroCien(100));
console.log(comprobarNumeroCien(115));


//Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’o no.

const personaAdmitida = {
  name: "Margarita",
  surname: "Moreno",
  age: 30,
  city: "Sant Fruitós de Bages",
  Job: "Stradivarius"
}


const comprobarPropiedad = (personaAdmitida: object): boolean => {
if ("name" in personaAdmitida) {
  return true;
} else {
  return false;
}
};

console.log(comprobarPropiedad(personaAdmitida));


//Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

const numerosDivisibles = (x: number, y: number): boolean => {
 return x % y === 0;
};

console.log(numerosDivisibles(25,5));
console.log(numerosDivisibles(3, 9));


//Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.

const comprobacionesRamdon = (caracteres:string, numero: number): boolean => {
 return caracteres.length === numero;
};

console.log(comprobacionesRamdon("tres", 4));
console.log(comprobacionesRamdon("Uno",1));

//Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).

const diasDeLaSemana = (dias: number): string => {
switch(dias) {
  case 1: return "Lunes";
  case 2: return "Martes";
  case 3: return "Miercoles";
  case 4: return "Jueves";
  case 5: return "Viernes";
  case 6: return "Sábado";
  case 7: return "Domingo";
  default: return "Algo no ha salido bien";
}
};
console.log(diasDeLaSemana(3));
console.log(diasDeLaSemana(1));
console.log(diasDeLaSemana(0));

//Con array:

const diaxDeLaSemana = (numero: number): string => {
  const diax = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  return diax[numero - 1] ?? "Número inválido";
};

console.log(diaxDeLaSemana(3));
console.log(diaxDeLaSemana(0));
console.log(diaxDeLaSemana(1));

//Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.

const mes = {
Enero: 1,
Febrero: 2,
Marzo: 3,
Abril: 4,
Mayo: 5,
Junio: 6,
Julio: 7,
Agosto: 8,
Septiembre: 9,
Octubre: 10,
Noviembre: 11,
Diciembre: 12
};

//Seguir en este ejercicio



//Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.


//Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.


//Funciones con arrays

//Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined’ .


//Implementa una función que admita un string como parámetro y devuelva la última letra.


//Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.


//Funciones con bucles


//Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.


//Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.


//Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.


/*Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
del array multiplicado por dicho número. Devuelve el resultado.*/


//Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.


//Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.


//Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo muestre por consola.


//Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menores a dicho número, y cuántos no.


//Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo.


/*Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
y viceversa. Muestra los arrays transformados por consola.*/


/*Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.*/


/*Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
Muestra por consola cada elemento por el que iteres.*/


//Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.


/*Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
otra función equivalente que haga la traducción inversa.*/


//Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.


//Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.


/*Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
de cada subarray y mostrarlos por consola.*/
