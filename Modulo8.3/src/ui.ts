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
if(botonPlay !== null && botonPlay !== undefined && botonPlay instanceof HTMLButtonElement) {
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
    const indice = i;

  
    if (!sePuedeVoltearLaCarta(tablero, indice)) return;

    voltearLaCarta(tablero, indice);
    const posicionCarta = tablero.cartas[indice];
    const img = divCarta.querySelector("img") as HTMLImageElement;
    img.src = posicionCarta.imagen;
    img.style.display = "block";
    divCarta.style.backgroundColor = "transparent";

    
    if (primeraCartaVolteada === null) {
      primeraCartaVolteada = indice;
      tablero.estadoPartida = "UnaCartaLevantada";
    } else if (segundaCartaVolteada === null && indice !== primeraCartaVolteada) {
      segundaCartaVolteada = indice;
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
            cartaDiv.style.backgroundColor = "transparent"; 
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


/*Apartados opcionales
Que mejoras puedes implementar:

Mostrar cuantos intentos lleva el usuario.
Mostrar una animación cuando el usuario pinche en una carta.
Que si el usuario pincha en una carta ya volteada le salga un mensaje.*/