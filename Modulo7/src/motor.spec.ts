import { vi } from 'vitest';
import { generarNumeroAleatorio, damePuntosCarta, obtenerEstadoPartida } from './motor';
import { partida } from './modelo';


describe('obtenerEstadoPartida', () => {
  it('Debería de devolver el estado seguir_jugando, cuando score sea menor a 7.5', () => {
    // Arrange
    const resultadoEsperado = 'seguir_jugando';
    vi.spyOn(partida, 'score', 'get').mockReturnValue(5);

    // Act
    const resultado = obtenerEstadoPartida();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it('Debería de devolver el estado Ganar, cuando score sea igual a 7.5', () => {
    // Arrange
    const resultadoEsperado = 'Ganar';
    vi.spyOn(partida, 'score', 'get').mockReturnValue(7.5);

    // Act
    const resultado = obtenerEstadoPartida();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it('Debería de devolver el estado Perder, cuando score sea mayor a 7.5', () => {
    // Arrange
    const resultadoEsperado = 'Perder';
    vi.spyOn(partida, 'score', 'get').mockReturnValue(10);

    // Act
    const resultado = obtenerEstadoPartida();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
})

/*describe('generarNumeroAleatorio', () => {
  it('Debería de devolver un 5, cuando el número aleatorio es 0.5', () => {
    // Arrange
    const resultadoEsperado = 5;
    vi.spyOn(Math, 'random').mockReturnValue(0.5);

    // Act
    const resultado = generarNumeroAleatorio();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  })
})*/

/*describe('damePuntosCarta', () => {
  it('Debería devolver 0.5, cuando la carta sea mayor a 7', () => {
    // Arrange
    const resultadoEsperado = 0.5;
    const carta = 10;

    // Act
    const resultado = damePuntosCarta(carta);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it('Debería devolver 5, cuando la carta sea iagual a 5', () => {
    // Arrange
    const resultadoEsperado = 5;
    const carta = 5;

    // Act
    const resultado = damePuntosCarta(carta);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  })
})*/