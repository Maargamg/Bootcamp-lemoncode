import {juego} from './modelo';
import { palabras } from './motor';

export const iniciarPartida = () => {
  const indiceAleatorio = Math.floor(Math.random() * palabras.length);
  const palabra = palabras[indiceAleatorio].toLocaleLowerCase();

  juego.totalIntentos = 0;
  juego.palabraElegida = palabra;
  juego.listadoLetras = palabra.split('');
  juego.listadoLetrasEncontradas = [];

  document.querySelector('.contenedorLetras')!.innerHTML = '';
  document.querySelector('.mensaje')!.textContent = '';
  document.querySelector('.intentos')!.textContent = 'intentos: 0';

  cargarJuego(palabra);
  cargarBotonesLetras(palabra);

  document.querySelector('.empezarPartida')!.classList.add('ocultar');
  document.querySelector('.volverEmpezar')!.classList.add('ocultar');
  document.querySelector('.botonesLetras')!.classList.remove('ocultar');

  mostrarImagenAhorcado(0);
};

export const resetearJuego = () => {
  document.querySelector('.contenedorLetras')!.innerHTML = '';
  document.querySelector('.mensaje')!.textContent = '';
  document.querySelector('.intentos')!.textContent = '';
  document.querySelector('.empezarPartida')!.classList.remove('ocultar');
  document.querySelector('.volverEmpezar')!.classList.add('ocultar');
  document.querySelector('.botonesLetras')!.classList.add('ocultar');
};


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
          juego.listadoLetrasEncontradas.push(listadoLetras[indiceLetra]);
        }
       }

}

const comprobarVictoria = () => {
  const letrasUnicas = [...new Set(juego.listadoLetras)];

  if (letrasUnicas.every(letra => juego.listadoLetrasEncontradas.includes(letra))) {
    document.querySelector('.mensaje')!.textContent = '🎉 Palabra acertada';
    mostrarImagenVictoria();
    finalizarPartida();
  }
 };

 const mostrarImagenVictoria = () => {
  const img = document.getElementById('imagenAhorcado') as HTMLImageElement;
  img.src = 'src/imagenes/ahorcado-globos.png';
 };

export const cargarBotonesLetras = (palabra: string) => {
  const totalBotones = 27;
  const listadoLetras = palabra.split('');
  for (let i = 0; i < totalBotones; i++) {
    const inputLetra = document.getElementById(`boton-letra-${i}`);
    if ( inputLetra !== null && inputLetra !== undefined && inputLetra instanceof HTMLInputElement) {
      inputLetra.addEventListener("click", () => {
      inputLetra.disabled = true;
      const letraABuscar = inputLetra.value.toLocaleLowerCase();
      const indicesEncontrados = dameListaIndicesEncontrados(listadoLetras, letraABuscar);
    if (indicesEncontrados.length > 0) {
      inputLetra.style.backgroundColor = '#097603';
      letraEncontrada(indicesEncontrados, listadoLetras);
      comprobarVictoria();
    }else {
      inputLetra.style.backgroundColor = '#970000';
      letraNoEncontrada();
    }
  });
  }}
}

const mostrarPalabraCompleta = () => {
  juego.listadoLetras.forEach((letra, i) => {
    const input = document.querySelector(`.letra-${i}`) as HTMLInputElement;
    input.value = letra.toLocaleUpperCase();
  });
};

const letraNoEncontrada = () => {
  juego.totalIntentos++;
  document.querySelector('.intentos')!.textContent = `Intentos: ${juego.totalIntentos}`;
  mostrarImagenAhorcado(juego.totalIntentos);
  if (juego.totalIntentos === 8) {
    document.querySelector('.mensaje')!.textContent = '❌ Palabra no acertada';
    mostrarPalabraCompleta();
    finalizarPartida();
  }
};

const finalizarPartida = () => {
  document.querySelector('.botonesLetras')!.classList.add('ocultar');
  document.querySelector('.volverEmpezar')!.classList.remove('ocultar');
};


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


