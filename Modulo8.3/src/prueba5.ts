const arrayCartas : string[] = ["leon", "buho", "perro", "gallina", "cerdo", "abeja", "leon", "buho", "perro", "gallina", "cerdo", "abeja"];

const escucharClick = document.querySelectorAll(".carta");
escucharClick.forEach((carta) =>{
if(carta !== null && carta !== undefined && carta instanceof HTMLDivElement) {
    const indice = carta.getAttribute("data-indice-id");
    console.log(indice);
}
} )
