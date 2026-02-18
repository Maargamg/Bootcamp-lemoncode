import { tablero } from "./modelo";
import { 
  iniciaPartida, 
  sePuedeVoltearLaCarta, 
  voltearLaCarta, 
  sonPareja, 
  parejaEncontrada, 
  parejaNoEncontrada 
} from "./motor";

const botonPlay = document.getElementById("start");
if (botonPlay && botonPlay instanceof HTMLButtonElement) {
  botonPlay.addEventListener("click", () => {
    iniciaPartida(tablero);
    botonPlay.disabled = true;
  });
}

let primeraCartaVolteada: number | null = null;
let segundaCartaVolteada: number | null = null;
let bloqueado = false; 

const posicionArray = document.querySelectorAll(".carta");
posicionArray.forEach((posicion, i) => {
  const divCarta = posicion as HTMLDivElement;

  divCarta.addEventListener("click", () => {
    if (bloqueado) return; 
    const indexNum = i;

  
    if (!sePuedeVoltearLaCarta(tablero, indexNum)) return;

    voltearLaCarta(tablero, indexNum);
    const posicionCarta = tablero.cartas[indexNum];
    const img = divCarta.querySelector("img") as HTMLImageElement;
    img.src = posicionCarta.imagen;
    img.style.display = "block";
    divCarta.style.backgroundColor = "transparent";

    
    if (primeraCartaVolteada === null) {
      primeraCartaVolteada = indexNum;
      tablero.estadoPartida = "UnaCartaLevantada";
    } else if (segundaCartaVolteada === null && indexNum !== primeraCartaVolteada) {
      segundaCartaVolteada = indexNum;
      tablero.estadoPartida = "DosCartasLevantadas";
      bloqueado = true; 

    
      if (sonPareja(primeraCartaVolteada, segundaCartaVolteada, tablero)) {
        parejaEncontrada(tablero, primeraCartaVolteada, segundaCartaVolteada);
        bloqueado = false;
        primeraCartaVolteada = null;
        segundaCartaVolteada = null;
        tablero.estadoPartida = "CeroCartasLevantadas";
      } else {
        
        setTimeout(() => {
          parejaNoEncontrada(tablero, primeraCartaVolteada!, segundaCartaVolteada!);

          
          [primeraCartaVolteada!, segundaCartaVolteada!].forEach(i => {
            const cartaDiv = posicionArray[i] as HTMLDivElement;
            const img = cartaDiv.querySelector("img") as HTMLImageElement;
            img.style.display = "none";
            cartaDiv.style.backgroundColor = ""; 
          });

          
          primeraCartaVolteada = null;
          segundaCartaVolteada = null;
          tablero.estadoPartida = "CeroCartasLevantadas";
          bloqueado = false; 
        }, 1000);
      }
    }
  });
});


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