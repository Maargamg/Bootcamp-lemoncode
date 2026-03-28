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




const reiniciarPartida = () => {
  tablero.contador = 0;
  marcador();
 for (let i = 0; i < tablero.cartas.length; i++) {
    const img = document.querySelector(`img[data-indice-id="${i}"]`);
    const div = document.querySelector(`div[data-indice-id="${i}"]`);
  if (img !== null && img !== undefined && img instanceof HTMLImageElement) {
    img.src = "";
    img.style.display = "none";
    }
    if (div !== null && div !== undefined && div instanceof HTMLDivElement) {
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

    const h1 = document.querySelector("h1");
    if(h1 !== null && h1 !== undefined && h1 instanceof HTMLHeadingElement){ 
    h1.style.display = "block";
  }
    botonPlay.disabled = true;
    const h2 = document.querySelector("h2");
    if(h2 !== null && h2 !== undefined && h2 instanceof HTMLHeadingElement) {
    h2.style.display = "none";
    }
    
    const intentos = document.querySelector("intentos");
    if(intentos !== null && intentos !== undefined && intentos instanceof HTMLInputElement){
    intentos.style.display = "flex";
    }
    
    const cartas = document.getElementById("cartas");
    if(cartas !== null && cartas !== undefined && cartas instanceof HTMLDivElement){
    cartas.style.display = "grid";
    }
   
  });
}

const botonRestart = document.getElementById("restart");
if (botonRestart !== null && botonRestart !== undefined && botonRestart instanceof HTMLButtonElement) {
  botonRestart.addEventListener("click", () => {
    reiniciarPartida();
    botonRestart.style.display = "none";

const fin = document.getElementById("victoria");
if(fin !== null && fin !== undefined && fin instanceof HTMLDivElement) {
   fin.style.display = "none";
}

const h2 = document.querySelector("h2");
if(h2 !== null && h2 !== undefined && h2 instanceof HTMLHeadingElement) {
 h2.style.display = "block";
}

const h1 = document.querySelector("h1");
if(h1 !== null && h1 !== undefined && h1 instanceof HTMLHeadingElement) {
 h1.style.display = "none";
}
   
const intentos = document.querySelector("intentos");
if(intentos !== null && intentos !== undefined && intentos instanceof HTMLInputElement) {
 intentos.style.display = "none";
}
   
const cartas = document.getElementById("cartas");
if(cartas !== null && cartas !== undefined && cartas instanceof HTMLDivElement) {
cartas.style.display = "none";
}
    

if (botonPlay !== null && botonPlay !== undefined && botonPlay instanceof HTMLButtonElement) {
      botonPlay.disabled = false;
    }
  });
}



const marcador = () => { 
const contadorIntentos = document.getElementById("intentos");
if (contadorIntentos !== null && contadorIntentos !== undefined && contadorIntentos instanceof HTMLInputElement) {
  contadorIntentos.value = tablero.contador.toString();
} 
};




const mapearDivsCartas = () => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    clickCarta(indice);
  }
}


const mostrarImagen = (indice: number) => {
  const miImagen = document.querySelector(`img[data-indice-id="${indice}"]`);
  if (miImagen !== null && miImagen !== undefined && miImagen instanceof HTMLImageElement) {
    miImagen.src = tablero.cartas[indice].imagen;
    miImagen.style.display = "block";
    }
  const colorDeFondo = document.querySelector(`div[data-indice-id="${indice}"]`);
  if(colorDeFondo !== null && colorDeFondo !== undefined && colorDeFondo instanceof HTMLDivElement) {
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
  const fin = document.getElementById("victoria");
  if(fin !== null && fin !== undefined && fin instanceof HTMLDivElement){
  fin.textContent = "🎉 ¡HAS GANADO! 🎉";
  fin.style.display = "block";
  }
  const cartas = document.getElementById("cartas");
  if(cartas !== null && cartas !== undefined && cartas instanceof HTMLDivElement) {
  cartas.style.display = "none";
  }
  
  const intentos = document.querySelector("intentos");
  if(intentos !== null && intentos !== undefined && intentos instanceof HTMLInputElement) {
  intentos.style.display = "none";
  }
 
  const h1 = document.querySelector("h1");
  if(h1 !== null && h1 !== undefined && h1 instanceof HTMLHeadingElement) {
  h1.style.display = "none";
  }
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
  }, 1000);
};

const mirarSiEsLaSegundaCarta = () => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;

  if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
    tablero.contador++;
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


