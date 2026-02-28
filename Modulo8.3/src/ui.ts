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
const fin = document.getElementById("victoria") as HTMLDivElement;

const reiniciarPartida = () => {
  contador = 0;
  marcador();
 for (let i = 0; i < tablero.cartas.length; i++) {
    const img = document.querySelector(`img[data-indice-id="${i}"]`) as HTMLImageElement;
    const div = document.querySelector(`div[data-indice-id="${i}"]`) as HTMLDivElement;
  if (img) {
    img.src = "";
    img.style.display = "none";
    }
    if (div) {
      div.style.backgroundColor = "#ffd1dc";
    }
  }

  tablero.cartas.forEach(carta => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  });
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "PartidaNoIniciada";
};

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

const botonRestart = document.getElementById("restart");
if (botonRestart !== null && botonRestart !== undefined && botonRestart instanceof HTMLButtonElement) {
  botonRestart.addEventListener("click", () => {
    reiniciarPartida();
    botonRestart.style.display = "none";
    fin.style.display = "none";
    h2.style.display = "block";
    h1.style.display = "none";
    intentos.style.display = "none";
    cartas.style.display = "none";

  if (botonPlay !== null && botonPlay !== undefined && botonPlay instanceof HTMLButtonElement) {
      botonPlay.disabled = false;
    }
  });
}



const marcador = () => { 
const contadorIntentos = document.getElementById("intentos");
if (contadorIntentos !== null && contadorIntentos !== undefined && contadorIntentos instanceof HTMLInputElement) {
  contadorIntentos.value = contador.toString();
} 
};

let contador = 0;


const mapearDivsCartas = () => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    clickCarta(indice);
  }
}


const mostrarImagen = (indice: number) => {
  const miImagen = document.querySelector(`img[data-indice-id="${indice}"]`);
  const colorDeFondo = document.querySelector(`div[data-indice-id="${indice}"]`);
  if (miImagen !== null && miImagen !== undefined && miImagen instanceof HTMLImageElement
    && colorDeFondo !== null && colorDeFondo !== undefined && colorDeFondo instanceof HTMLDivElement) {
    miImagen.src = tablero.cartas[indice].imagen;
    miImagen.style.display = "block";
    colorDeFondo.style.backgroundColor = "transparent";
  }
};

const clickCarta = (indice: number) => {
  const miDiv = document.querySelector(`div[data-indice-id="${indice}"]`);
  
  if (miDiv !== null && miDiv !== undefined && miDiv instanceof HTMLDivElement) {
    miDiv.addEventListener('click', () => {
      if (sePuedeVoltearLaCarta(tablero, indice)) {
        animacion(indice);
        voltearLaCarta(tablero, indice);
      if (tablero.indiceCartaVolteadaA === undefined) {
          tablero.indiceCartaVolteadaA = indice;
    } else {
     tablero.indiceCartaVolteadaB = indice;
    }  
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

const ocultarCartas = (indiceA: number, indiceB: number) => {
  [indiceA, indiceB].forEach(i => {
    const img = document.querySelector(`img[data-indice-id="${i}"]`);
    if (img !== null && img !== undefined && img instanceof HTMLImageElement) {
      img.src = "";
      img.style.display = "none";
    }
    const fondoRosa = document.querySelector(`div[data-indice-id="${i}"]`);
    if (fondoRosa !== null && fondoRosa !== undefined && fondoRosa instanceof HTMLDivElement) {
      fondoRosa.style.backgroundColor = "#ffd1dc";
    }
  });
};

const mostrarVictoria = () => {
  const restart = document.getElementById("restart");
  if (restart !== null && restart !== undefined && restart instanceof HTMLButtonElement) {
    restart.style.display = "block";
  }
  fin.textContent = "🎉 ¡HAS GANADO! 🎉";
  fin.style.display = "block";
  cartas.style.display = "none";
  intentos.style.display = "none";
  h1.style.display = "none";
};

const cuandoSonPareja = (indiceA: number, indiceB: number) => {
  parejaEncontrada(tablero, indiceA, indiceB);
  if (esPartidaCompleta(tablero)) {
    mostrarVictoria();
  }
};

const cuandoNoPareja = (indiceA: number, indiceB: number) => {
  setTimeout(() => {
    parejaNoEncontrada(tablero, indiceA, indiceB);
    ocultarCartas(indiceA, indiceB);
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
  }, 1000);
};

const mirarSiEsLaSegundaCarta = () => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;

  if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
    contador++;
    marcador();
    if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
      cuandoSonPareja(indiceCartaA, indiceCartaB);
    } else {
      cuandoNoPareja(indiceCartaA, indiceCartaB);
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  mapearDivsCartas();
});

