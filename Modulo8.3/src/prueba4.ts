const girarCarta = document.querySelectorAll(".carta");
    girarCarta.forEach((carta) => {
if(carta instanceof HTMLDivElement) {   
    carta.addEventListener("click", () => {
    const cartaAnimales = carta.querySelector("img");
if( cartaAnimales instanceof HTMLImageElement) {
    cartaAnimales.style.display = "block";
    carta.style.backgroundColor = "transparent";
      }
    });
  }
});
