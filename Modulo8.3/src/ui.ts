import { cartas, tablero  } from "./modelo";
import { barajarCartas, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";

const botonPlay = document.getElementById("start");
if(botonPlay !== null && botonPlay !== undefined && botonPlay instanceof HTMLButtonElement) {
  botonPlay.addEventListener("click", () => {
    barajarCartas(cartas);
    tablero.estadoPartida = "CeroCartasLevantadas";
    botonPlay.disabled = true;
  }) 
};



const posicionArray = document.querySelectorAll(".carta");
for(let i = 0; i < posicionArray.length; i++) {
  const posicion = posicionArray[i] as HTMLDivElement;
  posicion.addEventListener("click", () => {
  const posicionIndice = posicion.getAttribute("data-indice-id");
    if(!posicionIndice) return;
  const indexNum = Number(posicionIndice);
     if (!sePuedeVoltearLaCarta(tablero, indexNum)) return;
 voltearLaCarta(tablero, indexNum);
 const posicionCarta = tablero.cartas[indexNum];
 const img = posicion.querySelector("img");
 if(img !== null && img !== undefined && img instanceof HTMLImageElement) {
  img.src = posicionCarta.imagen;
  img.style.display = "block";
  posicion.style.backgroundColor = "transparent";
 }
})
}


/*Miramos si la carta es volteable (ver motor).
Si es volteable la voltearemos (cambiamos el src de la imagen), para la imagen sería recomendable crear data-indice-imagen,
va a coincidir con el índice del div para pintar la imagen correspondiente al índice del array de cartas.
Comprobamos si estamos elegiendo una carta o estamos en la segunda.
Si estamos en la segunda comprobamos si son pareja o no.
En caso de que si las dejamos fijas.
En caso de que no esperamos un segundo (setTimeout) y las ponemos boca abajo (reseteamos su estado sin voltear)
Vuelta a empezar
¿Qué es esto de setTimeout?

Es una función de javascript que nos permite ejecutar una función pasados X milisegundos, por ejemplo:

setTimeout(() => {
  console.log("Hola");
}, 1000);
Esto ejecutará el console.log("Hola") pasados 1000 milisegundos (1 segundo).

Apartados opcionales
Que mejoras puedes implementar:

Mostrar cuantos intentos lleva el usuario.
Mostrar una animación cuando el usuario pinche en una carta.
Que si el usuario pincha en una carta ya volteada le salga un mensaje.*/