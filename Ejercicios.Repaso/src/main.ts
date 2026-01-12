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
  return diax[numero - 1] ?? "Los dias de la semana van de 1 al 7";
};

console.log(diaxDeLaSemana(3));
console.log(diaxDeLaSemana(0));
console.log(diaxDeLaSemana(1));

//Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.

const mesesDelAño = (meses: number): string => {
  switch(meses) {
    case 1: return "Enero";
    case 2: return "Febrero";
    case 3: return "Marzo";
    case 4: return "Abril";
    case 5: return "Mayo";
    case 6: return "Junio";
    case 7: return "Julio";
    case 8: return "Agosto";
    case 9: return "Septiembre";
    case 10: return "Octubre";
    case 11: return "Noviembre";
    case 12: return "Diciembre";
    default: return "¡¡Los meses del año van del 1 al 12!!";

  }
} ;

console.log(mesesDelAño(1));
console.log(mesesDelAño(13));

///////////////////////////////////////////////////


const comprobarMes = (mes: number): string => {
  const mesDelaño = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return mesDelaño[mes - 1] ?? "Los meses del año van del 1 al 12";
};
console.log(comprobarMes(1));
console.log(comprobarMes(13));



//Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.

const nombresChica: string [] = ["Belén", "Olga", "Susana", "Camila", "Margarita"];
const nombresChico: string[] = ["Giovanni", "Marc", "Pol"];

const tamañoArray = (chicos: string[], chicas: string[] ): string[] => {
return chicos.length >= chicas.length ? chicos : chicas;
}
const resultadoNombres: string[] = tamañoArray(nombresChico, nombresChica);
console.log(resultadoNombres);


//Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.

const animales: string[] = ["Pollo", "Vaca", "Elefante", "Cocodrilo"];
const comidas: string[] = ["Pollo", "Patatas", "Espaguetis", "Sopa"];

const mismoElemento = (array1: string[], array2: string[]): boolean => {
 return array1[0] === array2[0];
};

const resultadoArrays = mismoElemento(animales, comidas);
console.log(resultadoArrays);


//Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined’ .

const arrayNumeros: number[] = [1, 2, 3 , 4 ,5];

const funcionNumeros = (numeroArray: number[]): number | undefined => {
 return numeroArray[1];
};

const solucion = funcionNumeros(arrayNumeros);
console.log(solucion);


//Implementa una función que admita un string como parámetro y devuelva la última letra.

const ultimaLetra = (letra: string): string | undefined => {
  if (letra.length === 0)  return undefined;
  return letra[letra.length -1];
};

console.log(ultimaLetra("Palo"));
console.log(ultimaLetra("Fuente"));


//Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.
//spread operator:
const marcasMoviles: string[] = ["Iphone", "Samsung", "Readme","Nokia"];

const intercambioPosicion = (posicion: string []): string[] => {
  if (posicion.length < 2) return [...posicion];
  const nuevaPosicion: string[] = [...posicion];
  [nuevaPosicion[0], nuevaPosicion[nuevaPosicion.length -1]] = [nuevaPosicion[nuevaPosicion.length -1], nuevaPosicion[0]];
  return nuevaPosicion;
};

const resultadoPosicion = intercambioPosicion(marcasMoviles);
console.log("Original:",marcasMoviles);
console.log("Intercambio:", resultadoPosicion);



const cantantes: string[] = ["Robe", "Melendi", "Rosalia", "BadGyal"];

const intercambioArrays = (arrays: string []): string[] => {
  [arrays[0], arrays[arrays.length -1]] = [arrays[arrays.length -1], arrays[0]];
  return arrays;
};
console.log(intercambioArrays(cantantes));


//Funciones con bucles


//Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.

const funcionConBucles = (numero: number, texto: string): void => {
   for ( let i = 0; i < numero; i++ ){ 
   console.log(texto);
   }
};

funcionConBucles(5, "Hola mundo");


//Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.

const datosEmpleado = {
  nombre: "Borja",
  apellido: "Esturriaca",
  edad: "22",
  id: "253789"
};

const funcionCualquiera = (datos: object): number => {
return Object.keys(datos).length;
};
console.log(funcionCualquiera(datosEmpleado));

/*Los objetos no tienen propiedad length ,length solo existe en arrays y strings, no en objetos normales. Un objeto como { a: 1, b: 2 } no tiene length.
No puedes acceder a las propiedades con un índice numérico como en un array (obj[0], obj[1])
Las propiedades de un objeto son claves, no posiciones.*/


//Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.

const mostrarObjeto = (objeto: object): void => {
  Object.values(objeto).forEach(valor => console.log(valor));
};

const personaNueva = {
  nombre: "Ana",
  apellido: "Moreno"
};

mostrarObjeto(personaNueva);

/*Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
del array multiplicado por dicho número. Devuelve el resultado.*/

//Usando for:

const sumarMultiplicacion = (numeros: number[], multiplicador: number): number => {
  let suma = 0;
  for ( let i = 0; i < numeros.length; i++) {
    suma += numeros[i] * multiplicador;
  }
  return suma;
}

console.log(sumarMultiplicacion([1, 2, 3, 4], 2));

//Usando reduce:

const sumarMultiplicador = (numeros: number[], multiplicador: number): number =>
  numeros.reduce((acumulador, numero) => acumulador + numero * multiplicador, 0);


const numerosArray :number[] = [1, 2, 3, 4];
console.log(sumarMultiplicador(numerosArray, 2));



//Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

// For:

const sumarCaracteres = (texto: string, caracter: string): number => {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if(texto[i] === caracter) {
      contador++;
    }
  }
  return contador;
}

console.log(sumarCaracteres("programacion","o"));

//split:

const contarCaracterSplit = (texto: string, caracter: string): number =>
  texto.split(caracter).length - 1;

console.log(contarCaracterSplit("Typescript", "i"));

//Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.

const ciudadesEspaña: string[] = ["León", "Murcia", "Barcelono", "Bilbao"];

const recorrerArray = (ciudad: any[]): void => {
  for (let i = 0; i < ciudad.length; i++){
    console.log(ciudad[i]);
  }
 };

recorrerArray(ciudadesEspaña);


//Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menores a dicho número, y cuántos no.

const arrayNumero: number[] = [1, 2, 3, 4, 5];

const funcionNumerosArray = (arrayNumber: number[], numeroSolo:number): {menores: number; noMenores: number} => {
 let menores = 0;
 let noMenores = 0;
 
  for (let i = 0; i < arrayNumber.length; i++){
    if( arrayNumber[i] < numeroSolo){
      menores++;
    } else{
      noMenores++;
    }
  }
    return {
    menores,
    noMenores
  }
};

console.log(funcionNumerosArray(arrayNumero, 2));

//Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo.

const arrayObjetos : string[] = ["Mesa", "Silla", "Vela", "Espejo"];
const segundoArrayObjetos :string[] = ["Puerta", "Mesa", "Barco", "Raqueta"];

const encuentraArray = (arr1: string[], arr2: string[]): void => {
  for (let i = 0; i < arr1.length; i++) {
 if(arr2.includes(arr1[i])){
  console.log(`${arr1[i]} está en el segundo array`);
 }else {
  console.log(`${arr1[i]} no está en el segundo array`);
  }
 }
};

encuentraArray(arrayObjetos, segundoArrayObjetos);

/*Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
y viceversa. Muestra los arrays transformados por consola.*/

const array1: string[] = ["Rojo", "Rosa", "Verde", "Amarillo"];
const array2: string[] = ["Perro", "Gato", "Elefante", "Vaca"];

const intercambioElementos = (arrxi1: string[], arrxi2: string[]): void => {
const nuevoArray1 = [...arrxi1];
const nuevoArray2 = [...arrxi2];

const intercambio = Math.min(arrxi1.length, arrxi2.length);

for ( let i = 0; i < intercambio; i++) {
  const nuevaDisposicion = nuevoArray1[i];
  nuevoArray1[i] = nuevoArray2[i];
  nuevoArray2[i] = nuevaDisposicion;
}
console.log("Nuevo array 1:", nuevoArray1);
console.log("Nuevo array 2:",nuevoArray2);
};
intercambioElementos(array1, array2);





/*Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.*/


//For

const color: string[] = ["Rojo", "Rosa", "Verde","Azul"];

const arrayObjec = (arr: string[]): object => {
  const obj: { [key : string]: any} = {};
  for (let i = 0; i < arr.length; i++) {
    obj[`prop${i + 1}`] = arr[i];
  }
  return obj;
}

console.log(arrayObjec(color));

//Reduce

const colores: string [] = ["Rojo", "Verde", "Azul", "Amarillo"];

const arrayAObjeto = (arr: any[]): object => {
  return arr.reduce((obj, valor, indice) => {
    obj[`prop${indice + 1}`] = valor;
    return obj;
  }, {} as { [key: string]: any});
};

console.log(arrayAObjeto(colores));


/*Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
Muestra por consola cada elemento por el que iteres.*/

const arraiEjemplo: number[] = [1, 2, 3, 4, 5];

const recorrerArrays = <T>(arrai: T[], inicio: number): T[] => {
const resultadoEsperadoX : T[] = [];  
 for( let i = inicio; i < arrai.length; i++ ) {
resultadoEsperadoX.push(arrai[i]);
 }
 return resultadoEsperadoX;
};

console.log(recorrerArrays(arraiEjemplo, 3));


//Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

//For
const arrayMaquillaje : string[] = ["Cacao", "Gloss", "Lápiz", "Máscara", "Colorete"];

const comprobarParametro = (arraySt: string[], propiedad: string): boolean => {
  for (let i = 0; i < arraySt.length; i++) {
   if (arraySt[i] === propiedad) {
   return true;
   } 
  }
  return false;
};

console.log(comprobarParametro(arrayMaquillaje, "Cacao"));
console.log(comprobarParametro(arrayMaquillaje, "Pintalabios"));

//Includes

const arrayMakeUp : string[] = ["Pintalabios", "Gel Cejas", "Corrector", "Iluminador"];

const comprobarIncludes = (arraiSt: string[], elemento: string): boolean => {
 return arraiSt.includes(elemento);
};

console.log(comprobarIncludes(arrayMakeUp, "Pintalabios"));
console.log(comprobarIncludes(arrayMakeUp, "Cacao"));

//Some

const masMaquillaje : string[] = ["Sombras ojos", "Broncer", "Eyeliner"];

const comprobarSome = (arraiStr: string[], palabra: string): boolean => {
  return arraiStr.some(elemento => elemento === palabra);
}; 

console.log(comprobarSome(masMaquillaje, "Broncer"));
console.log(comprobarSome(masMaquillaje, "Brocha"));



/*Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
otra función equivalente que haga la traducción inversa.*/

const frutaEspañol : string[] = ["Nectarina", "Albaricoque", "Piña", "Sandia"];
const frutaIngles : string[] = ["Nectarine", "Apricot", "Pineapple", "Watermelon"];

const traducirEspañol = (fruta: string): string => {
fruta = fruta.toLowerCase();
 for (let i = 0; i < frutaEspañol.length; i++){
  if(frutaEspañol[i].toLowerCase() === fruta){
    return frutaIngles[i];
  }
 }
 return "Esa fruta no está dentro del array";
};

const traducirIngles = (fruit: string): string => {
  fruit = fruit.toLowerCase();
  for (let i = 0; i < frutaIngles.length; i++) {
    if(frutaIngles[i].toLowerCase() === fruit){
      return frutaEspañol[i];
    }
  }
  return "That fruit isnt in the array";
};

console.log(traducirEspañol("Nectarina"));
console.log(traducirIngles("Watermelon"));



//Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.

//For
 const textoLReves = (text: string): void => {
  let resultadoAlReves = "";
  for(let i = text.length -1; i >= 0; i--){
    resultadoAlReves += text[i];
  }
  console.log(resultadoAlReves);
 }

 textoLReves("dev");

 //Split:
  const textoReves = (textoo: string): void => {
    const resultadoReves = textoo.split("").reverse().join("");
    console.log(resultadoReves);
  }
   textoReves("junior");


//Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.

const mayusculasYMinusculas = (minYman: string): string => {
  let resultados = "";
  for ( let i = 0; i < minYman.length; i++) {
    if(i % 2 === 0){
    resultados += minYman[i].toLocaleUpperCase();
    } else {
      resultados += minYman[i].toLocaleLowerCase();
    }
  }
     return resultados;
};

console.log(mayusculasYMinusculas("hola mundo"));


/*Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
de cada subarray y mostrarlos por consola.*/

const arrayDeArrays = (arrays: any [][]): void => {
  for(let i = 0; i < arrays.length; i++){
    for(let j = 0; j < arrays[i].length; j++){
      console.log(arrays[i][j]);
    }
  }
};

const deTodoUnPoco = [
  [1, 2, 3],
  ["a", "b", "c"],
  ["True", "False"]
];

arrayDeArrays(deTodoUnPoco);
