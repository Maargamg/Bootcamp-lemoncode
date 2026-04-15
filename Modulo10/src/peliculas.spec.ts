import { Movie } from "./model";
import { leePeliculas } from "./peliculas";
import { vi } from "vitest";
import Axios from "axios";

describe("leePeliculas", () => {
 it("Debería devolver peliculas cuando la solicitud tiene una respuesta correcta", async () => {
      
 // Arrange

 const peliculasMock: Movie[] = [
 {
 id: "1",
 title: "Iron Man",
 year: 2008,
 director: "Jon Favreau",
 description: "After being held captive in an Afghan cave, billionaireengineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
 actors: ["1", "2", "3"],
 cover_url: "https://raw.githubusercontent.com/Lemoncode/bootcamp-js2/main/10-async/03-server-peliculas/assets/movies/iron-man.webp"
 },
 ];
 const axiosGetSpy = vi.spyOn(Axios, "get").mockResolvedValue({
 data: peliculasMock,
 });

 // Act
 const resultado = await leePeliculas()


 // Assert
 expect(resultado).toEqual(peliculasMock);
 });

it("Debería devolver 'Demasiadas peliculas'", async () => {
    //Arrange
    vi.spyOn(Axios, "get").mockRejectedValue({
        response: {
            status: 403
        }
    });


    //Act
    try{
        await leePeliculas();
    } catch(error) {
         //Assert
         expect(error).toEqual("Demasiadas peticiones a la API de peliculas");

    }
   
});


it("Debería devolver 'La API está caida'", async () => {
    //Arrange
    vi.spyOn(Axios, "get").mockRejectedValue({
        response: {
            status: 503
        }
    });


    //Act
    try{
        await leePeliculas();
    } catch(error) {
         //Assert
         expect(error).toEqual("La API está caída");

    }
   
});

 });

