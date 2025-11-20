const falloAhorcado = (imagen: string | number) => {
    switch (imagen) {
     case 1:
     return 'C:\Users\Marga\Downloads\ahorcado-pie.png';
     case 2:
     return 'C:\Users\Marga\Downloads\ahorcado-1.png';
     case 3:
     return 'C:\Users\Marga\Downloads\ahorcado-2.png';
     case 4:
     return 'C:\Users\Marga\Downloads\ahorcado-3.png';
     case 5:
     return 'C:\Users\Marga\Downloads\ahorcado-4.png';
     case 7:
     return 'C:\Users\Marga\Downloads\ahorcado-5.png';
     case 8:
     return 'C:\Users\Marga\Downloads\ahorcado-6.png';
     case 9:
     return 'C:\Users\Marga\Downloads\ahorcado-7.png';
     case 10:
     return 'C:\Users\Marga\Downloads\ahorcado-8.png';
     case 11:
     return 'C:\Users\Marga\Downloads\globos-de-aire.png';
    }
}

const mostrarAhorcado = (urlAhorcado: string) => {
 const elementoImagen = document.getElementById("contenedorImagen")
 if (elementoImagen !== null !== undefined && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlAhorcado;
    }
}