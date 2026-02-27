import { tablero } from "./modelo";
import {
  iniciaPartida,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
  esPartidaCompleta
} from "./motor";

const h1 = document.querySelector("h1") as HTMLHeadingElement;
const h2 = document.querySelector("h2") as HTMLHeadingElement;
const intentos = document.getElementById("intentos") as HTMLInputElement;
const cartas = document.getElementById("cartas") as HTMLDivElement;

const botonPlay = document.getElementById("start");
if (botonPlay !== null && botonPlay !== undefined && botonPlay instanceof HTMLButtonElement) {
  botonPlay.addEventListener("click", () => {
    iniciaPartida(tablero);
    h1.style.display = "block";
    botonPlay.disabled = true;
    h2.style.display = "none";
    intentos.style.display = "flex";
    cartas.style.display = "grid";
  });
}

const contadorIntentos = document.getElementById("intentos");
if (contadorIntentos !== null && contadorIntentos !== undefined && contadorIntentos instanceof HTMLInputElement) {
  contadorIntentos.value = "00";
}

let contador = 0;
let primeraCartaVolteada: number | null = null;
let segundaCartaVolteada: number | null = null;
let bloqueado = false;

// const posicionArray = document.querySelectorAll(".carta");
// posicionArray.forEach((posicion, i) => {
//   const divCarta = posicion as HTMLDivElement;

//   divCarta.addEventListener("click", () => {
//     divCarta.classList.add("animacion");
//     setTimeout(() => {
//       divCarta.classList.remove("animacion");
//     }, 300);
//     if (bloqueado) return;
//     const indice = i;


//       voltearLaCarta(tablero, indice);
//       const posicionCarta = tablero.cartas[indice];
//       const img = divCarta.querySelector("img") as HTMLImageElement;
//       img.src = posicionCarta.imagen;
//       img.style.display = "block";
//       divCarta.style.backgroundColor = "transparent";


//       if (primeraCartaVolteada === null) {
//         primeraCartaVolteada = indice;
//         tablero.estadoPartida = "UnaCartaLevantada";
//       } else if (segundaCartaVolteada === null && indice !== primeraCartaVolteada && contadorIntentos !== null &&
//         contadorIntentos instanceof HTMLInputElement) {
//         segundaCartaVolteada = indice;
//         tablero.estadoPartida = "DosCartasLevantadas";
//         bloqueado = true;
//         contador++;
//         contadorIntentos.value = contador.toString().padStart(2, "0");


//         if (sonPareja(primeraCartaVolteada, segundaCartaVolteada, tablero)) {
//           parejaEncontrada(tablero, primeraCartaVolteada, segundaCartaVolteada);
//           const fin = document.getElementById("victoria");
//           if (fin !== null && fin !== undefined && fin instanceof HTMLDivElement &&
//             restart !== null && restart !== undefined && restart instanceof HTMLButtonElement) {
//             if (esPartidaCompleta(tablero)) {
//               h1.style.display = "none";
//               intentos.style.display = "none";
//               cartas.style.display = "none";
//               fin.textContent = "🎉 ¡HAS GANADO! 🎉";
//               fin.style.display = "block";
//               restart.style.display = "block";
//             }
//           }
//           bloqueado = false;
//           primeraCartaVolteada = null;
//           segundaCartaVolteada = null;
//           tablero.estadoPartida = "CeroCartasLevantadas";
//         } else {
//           setTimeout(() => {
//             parejaNoEncontrada(tablero, primeraCartaVolteada!, segundaCartaVolteada!);
//             [primeraCartaVolteada!, segundaCartaVolteada!].forEach(i => {
//               const cartaDiv = posicionArray[i] as HTMLDivElement;
//               const img = cartaDiv.querySelector("img") as HTMLImageElement;
//               img.style.display = "none";
//               cartaDiv.style.backgroundColor = "";
//             });


//             primeraCartaVolteada = null;
//             segundaCartaVolteada = null;
//             tablero.estadoPartida = "CeroCartasLevantadas";
//             bloqueado = false;
//           }, 1000);
//         }
//       }
//     }
//   });

//   const restart = document.getElementById("restart");
//   if (restart !== null && restart instanceof HTMLButtonElement) {
//     restart.addEventListener("click", () => {
//       iniciaPartida(tablero);
//       primeraCartaVolteada = null;
//       segundaCartaVolteada = null;
//       contador = 0;
//       bloqueado = false;
//       if (contadorIntentos !== null && contadorIntentos !== undefined && contadorIntentos instanceof HTMLInputElement) {
//         contadorIntentos.value = "00";
//       }

//       document.querySelectorAll(".carta").forEach((carta) => {
//         const div = carta as HTMLDivElement;
//         div.style.backgroundColor = "#ffd1dc";
//         const img = div.querySelector("img") as HTMLImageElement;
//         img.style.display = "none";
//       });

//       const fin = document.getElementById("victoria") as HTMLDivElement;
//       fin.style.display = "none";
//       h1.style.display = "block";
//       intentos.style.display = "flex";
//       cartas.style.display = "grid";
//       h2.style.display = "none";

//     });
//   }
// });

const mapearDivsCartas = () => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    clickCarta(indice);
  }
}

const mostrarImagen = (indice: number) => {
  const miImagen = document.querySelector(`img[data-indice-id="${indice}"]`);

  if (miImagen !== null && miImagen !== undefined && miImagen instanceof HTMLImageElement) {
    miImagen.src = tablero.cartas[indice].imagen;
  }
}

const clickCarta = (indice: number) => {
  const miDiv = document.querySelector(`div[data-indice-id="${indice}"]`);
  
  if (miDiv !== null && miDiv !== undefined && miDiv instanceof HTMLDivElement) {
    miDiv.addEventListener('click', () => {
      if (sePuedeVoltearLaCarta(tablero, indice)) {
        animacion(indice);
        voltearLaCarta(tablero, indice);
        mostrarImagen(indice);
        mirarSiEsLaSegundaCarta();
      } else {
        mostrarMensaje("¡Esta carta ya está girada!!")
      }
    })
  }
};


const mostrarMensaje = (texto: string) => {
const mensaje = document.getElementById("mensaje");
if(mensaje !== null && mensaje !== undefined && mensaje instanceof HTMLDivElement) {
   mensaje.textContent = texto;

   setTimeout(() => {
    mensaje.textContent = "";
   }, 1000);

 }
};

const animacion = (indice: number) => {
  const efectoGirar = document.querySelector(`div[data-indice-id="${indice}"]`);
  if(efectoGirar !== null && efectoGirar !== undefined && efectoGirar instanceof HTMLDivElement){
    efectoGirar.classList.add("animacion");
    setTimeout(() => {
      efectoGirar.classList.remove("animacion");
    }, 300);
  }
}


const mirarSiEsLaSegundaCarta = () => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;

  if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
    if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
      parejaEncontrada(tablero, indiceCartaA, indiceCartaB);

      if (esPartidaCompleta(tablero)) {
        //añadir aqui mensaje de victoria por haber completadap el juego
      }
    } else {
      parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
      // añadir aqui el código de que las cartas se giren si no son pareja.
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mapearDivsCartas();
});