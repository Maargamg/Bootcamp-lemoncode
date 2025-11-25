import {juego} from './modelo';

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


