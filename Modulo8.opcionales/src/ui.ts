import {juego} from './modelo';
import { palabras } from './motor';
/*export const falloAhorcado = (imagen: string | number) => {
    switch (imagen) {
     case 1:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-pie.png";
     case 2:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-1.png";
     case 3:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-2.png";
     case 4:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-3.png";
     case 5:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-4.png";
     case 7:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-5.png" ;
     case 8:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-6.png";
     case 9:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-7.png";
     case 10:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-8.png";
     case 11:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\globos-de-aire.png";
     default: "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\src\imagenes\ahorcado-pie.png" ;
    }
};

export const mostrarAhorcado = (urlAhorcado: string) => {
 const elementoImagen = document.getElementById("contenedorImagen")
 if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlAhorcado;
    }
};

export const desahabilitarBotonEmpezarPartida = (estaDeshabilitado: boolean) => {
    const botonEmpezarPartida = document.getElementById("empezarPartida");
    if (botonEmpezarPartida !== null && botonEmpezarPartida !== undefined && botonEmpezarPartida instanceof HTMLButtonElement) {
        botonEmpezarPartida.disabled = estaDeshabilitado;
    }
};

export const deshabilitarBotonVolverEmpezar = (estaDeshabilitado: boolean) => {
    const botonVolverEmpezar = document.getElementById("volverEmpezar");
    if (botonVolverEmpezar !== null && botonVolverEmpezar !== undefined && botonVolverEmpezar instanceof HTMLButtonElement) {
        botonVolverEmpezar.disabled = estaDeshabilitado
    }
}

export const empezarPartida = () => {
  mostrarAhorcado("C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-pie.png");
  desahabilitarBotonEmpezarPartida(false);
  deshabilitarBotonVolverEmpezar(true);
}


export const inicializaAhorcado = () => {
  const botonNewGame = document.getElementById("empezarPartida")
  if (botonNewGame !== null && botonNewGame !== undefined && botonNewGame instanceof HTMLButtonElement) {
    botonNewGame.addEventListener('click', () => {
      empezarPartida();
    })
}}*/

const crearInput = (indice: number) => {
  const elementoInput = document.createElement ("input");
  elementoInput.classList.add("letra");
  elementoInput.classList.add(`letra-${indice}`);
  elementoInput.disabled = true;
  elementoInput.maxLength = 1;
  return elementoInput;
}

const dameListaIndicesEncontrados = (listadoLetras: string[], letraABuscar: string) => {
  return listadoLetras.reduce((acc: number[], letra: string, indice: number) => {
        if(letraABuscar === letra) {
          acc = [...acc, indice]
        } 
        return acc;
       },[]);
}

const letraEncontrada = (indicesEncontrados: number[], listadoLetras: string[]) => {
 for (let index = 0; index < indicesEncontrados.length; index++){
        const indiceLetra = indicesEncontrados[index];
        const input = document.querySelector(`.letra-${indiceLetra}`);
        if( input !== null && input !== undefined && input instanceof HTMLInputElement) {
          input.value = listadoLetras[indiceLetra].toLocaleLowerCase();
        }
       }
}

export const cargarBotonesLetras = (palabra: string) => {
  const totalBotones = 27;
  const listadoLetras = palabra.split('');
  for (let i = 0; i < totalBotones; i++) {
    const inputLetra = document.getElementById(`boton-letra-${i}`);
    if ( inputLetra !== null && inputLetra !== undefined && inputLetra instanceof HTMLInputElement) {
      inputLetra.addEventListener("click", () => {
      const letraABuscar = inputLetra.value.toLocaleLowerCase();
      const indicesEncontrados = dameListaIndicesEncontrados(listadoLetras, letraABuscar);
    if (indicesEncontrados.length > 0) {
      letraEncontrada(indicesEncontrados, listadoLetras);
    }else {
      letraNoEncontrada();
    }
  });
  }}
}

const letraNoEncontrada = () => {
  juego.totalIntentos++;
  mostrarImagenAhorcado(juego.totalIntentos);
  if( juego.totalIntentos === 8) {
    console.log("Game over");
  }
}

const mostrarImagenAhorcado = (totalIntentos: number) => {
const elementoImagen = document.getElementById("imagenAhorcado");
if (elementoImagen !== null && elementoImagen  !== undefined && elementoImagen instanceof HTMLImageElement) {
  elementoImagen.src = `src/imagenes/ahorcado-${totalIntentos}.png` ;
}
}

export const cargarJuego = (palabra: string) => {
  
  const listadoLetras = palabra.split('');
  const contenedorLetras = document.querySelector ('.contenedorLetras');
   if ( contenedorLetras !== null && contenedorLetras !== undefined && contenedorLetras instanceof HTMLDivElement) {
    for (let i = 0; i < listadoLetras.length; i++) {
      const elementoInput = crearInput(i);
      contenedorLetras.appendChild(elementoInput);
    }
   }
};


