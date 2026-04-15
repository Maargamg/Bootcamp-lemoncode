import Axios, {AxiosError} from "axios";
import { Actors } from "./model"; 
import { leeActores } from "./actores";
import { vi } from "vitest";

describe("leeActores", () => {
    it("Debería devolver actores cuando la solicitud tiene una respuesta correcta", () => {
        //Arrange
        const actoresMock: Actors[] = [
 {
 id: "1",
 name: "Robert Downey Jr.",
 bio: "Robert John Downey Jr. (born April 4, 1965) is an American actor,producer, and singer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success in middle age.",
 movies: ["1", "2", "3"],
 cover_url: "https://raw.githubusercontent.com/Lemoncode/bootcamp-js-2/main/10- async/03-server-peliculas/assets/actors/robert-downey-jr.webp",
  },
 ];
 vi.spyOn(Axios, "get").mockResolvedValue({
 data: actoresMock,
 });

        //Act
        const promesa =  leeActores();

        //Assert
        expect(promesa).resolves.toEqual(actoresMock);
    });

it('debería devolver una error "Actor not found" cuando rechaza la solicitud con el código 404', async () => {
 // Arrange
 vi.spyOn(Axios, "get").mockRejectedValue({
    response: {
       status: 404,
 },
 } as AxiosError);


 // Act
 try {
    await leeActores();
      } catch (error) {
// Assert
 expect(error).toEqual("Actor not found");
 }
 });

 it('debería devolver una error "Internal server error" cuando rechaza la solicitud con el código 500', () => {
 // Arrange
 vi.spyOn(Axios, "get").mockRejectedValue({
    response: {
       status: 500,
 },
 } as AxiosError);


 // Act

   const promise = leeActores();
     
// Assert
 expect(promise).rejects.toEqual("Internal server error");
 
 });
});