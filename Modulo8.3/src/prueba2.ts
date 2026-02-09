const girarFoto = document.getElementById("Fotos-Animales");
if(girarFoto !== null && girarFoto !== undefined && girarFoto instanceof HTMLDivElement) {
girarFoto.addEventListener("click", () => {
   const fotoAnimal = document.getElementById("foto1");
   if(fotoAnimal !== null && fotoAnimal !== undefined && fotoAnimal instanceof HTMLImageElement) {
    fotoAnimal.style.display = "block";
    girarFoto.style.backgroundColor = "transparent";
   }
})
};







