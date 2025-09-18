import {vi} from 'vitest';
import {comprobarPartida} from './ui';

describe ('comprobarPartida', () => {
  it ('Deberia devolver ¡¡¡Enhorabuena has ganado!!! cuando score sea igual a 7.5', () => {
  //Arrange
  const resultadoEsperado = '¡¡¡Enhorabuena has ganado!!!';
  const texto : string = "7.5";
  const numeroAcertar : number = 7.5;

  //Act
  const resultado = comprobarPartida(texto, numeroAcertar);

  //Assert
  expect(resultado).toBe(resultadoEsperado);

  })

  it ('Deberia devolver GAME OVER cuando score no sea igual a 7.5', () => {
    //Arrange
    const resultadoEsperado = 'GAME OVER';
    const texto : string = "8";
    const numeroAcertar : number = 7.5;

    //Act
    const resultado = comprobarPartida (texto, numeroAcertar);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  })
}) ;