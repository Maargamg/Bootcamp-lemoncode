/*¿Qué debemos hacer aquí?

Habrá un botón para empezar partida, ese lo que hará es:

Crear el tablero inicial
Barajar las cartas
En el HTML tendremos un CSS grid con todas las cartas (boca abajo, src de carta boca abajo) y un atributo data-indice-array en el que tendremos el indice del array al que corresponden, así pues la partida arranca con

Todas las cartas boca abajo.
Escuchando al evento click de cada carta (cuando el usuario pinche en una leeremos de data-indice-array, la posición del array de la carta).
En cuanto el usuario pinche en una carta:

Miramos si la carta es volteable (ver motor).
Si es volteable la voltearemos (cambiamos el src de la imagen), para la imagen sería recomendable crear data-indice-imagen, va a coincidir con el índice del div para pintar la imagen correspondiente al índice del array de cartas.
Comprobamos si estamos elegiendo una carta o estamos en la segunda.
Si estamos en la segunda comprobamos si son pareja o no.
En caso de que si las dejamos fijas.
En caso de que no esperamos un segundo (setTimeout) y las ponemos boca abajo (reseteamos su estado sin voltear)
Vuelta a empezar
¿Qué es esto de setTimeout?

Es una función de javascript que nos permite ejecutar una función pasados X milisegundos, por ejemplo:

setTimeout(() => {
  console.log("Hola");
}, 1000);
Esto ejecutará el console.log("Hola") pasados 1000 milisegundos (1 segundo).

Apartados opcionales
Que mejoras puedes implementar:

Mostrar cuantos intentos lleva el usuario.
Mostrar una animación cuando el usuario pinche en una carta.
Mostrar un efecto hover cuando el usuario ponga el ratón sobre una carta.
Que si el usuario pincha en una carta ya volteada le salga un mensaje.*/