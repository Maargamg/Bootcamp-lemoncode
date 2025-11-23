import { listadoLetrasletras, palabraElegida } from "./motor";

const falloAhorcado = (imagen: string | number) => {
    switch (imagen) {
     case 1:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-pie.png";
     case 2:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-1.png";
     case 3:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-2.png";
     case 4:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-3.png";
     case 5:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-4.png";
     case 7:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-5.png";
     case 8:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-6.png";
     case 9:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-7.png";
     case 10:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-8.png";
     case 11:
     return "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\globos-de-aire.png";
     default:  "C:\Users\Marga\OneDrive\Escritorio\Contenido Lemoncamp\Bootcamp-lemoncode\Modulo8.opcionales\imagenes\ahorcado-pie.png";
    }
};

const mostrarAhorcado = (urlAhorcado: string) => {
 const elementoImagen = document.getElementById("contenedorImagen")
 if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlAhorcado;
    }
};

const desahabilitarBotonEmpezarPartida = (estaDeshabilitado: boolean) => {
    const botonEmpezarPartida = document.getElementById("empezarPartida");
    if (botonEmpezarPartida !== null && botonEmpezarPartida !== undefined && botonEmpezarPartida instanceof HTMLButtonElement) {
        botonEmpezarPartida.disabled = estaDeshabilitado;
    }
};

const deshabilitarBotonVolverEmpezar = (estaDeshabilitado: boolean) => {
    const botonVolverEmpezar = document.getElementById("volverEmpezar");
    if (botonVolverEmpezar !== null && botonVolverEmpezar !== undefined && botonVolverEmpezar instanceof HTMLButtonElement) {
        botonVolverEmpezar.disabled = estaDeshabilitado
    }
}

const empezarPartida = () => {
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
}}