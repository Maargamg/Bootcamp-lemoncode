const girarFoto = document.getElementById("Fotos-Animales");
if(girarFoto !== null && girarFoto !== undefined && girarFoto instanceof HTMLDivElement) {
girarFoto.addEventListener("click", () => {
   const fotoAnimal = document.getElementById("foto1");
   if(fotoAnimal !== null && fotoAnimal !== undefined && fotoAnimal instanceof HTMLImageElement) {
    fotoAnimal.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
   }
})
};







