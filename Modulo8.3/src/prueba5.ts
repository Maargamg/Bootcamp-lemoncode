interface infoCarta {
  idFoto: number;
  imagen: string;
}

const cartasAnimales: infoCarta[] = [
{idFoto: 1,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"},
{idFoto: 2,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"},
{idFoto: 3,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png"},
{idFoto: 4,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png"},
{idFoto: 5,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png"},
{idFoto: 6,imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png"}
];

const arrayAnimales: infoCarta[] = [...cartasAnimales, ...cartasAnimales];

const posicionArray = document.querySelectorAll(".carta");
 for (let i = 0; i < posicionArray.length; i++) {
const posicion = posicionArray[i] as HTMLDivElement;
posicion.addEventListener("click", () => {
    const index = posicion.getAttribute("data-indice-id");
if(!index) return;

const posicionIndice = Number(index);
const carta : infoCarta = arrayAnimales[posicionIndice];

const img = posicion.querySelector("img");
if(img !== null && img !== undefined && img instanceof HTMLImageElement) {
 img.src = carta.imagen;
}

console.log(`La posicion en el array que has pulsado es ${index}, idFoto ${carta.idFoto}`);

})
};
