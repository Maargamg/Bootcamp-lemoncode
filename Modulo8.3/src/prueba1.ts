/*Para esta parte del ejercicio voy a usar la forma de barajar Fisher-Yates, porque según he visto en stack Overflow
tiene una complejidad O(n), cosa que no ocurre con map + sort, aunque esta sea más sencilla e inmutable, es complejidad O(n log n); 
Además la función Fisher-Yates baraja los elementos de forma justa, en cambio según he leido usando sort no es matemataticamente justo,
depende del motor de js, unas combinaciones salen más que otras*/


const animales = ['🐈‍⬛', '🦙', '🦥', '🐢', '🦭', '🦤'];

const barajarArray = <T>(array: T[]): T[] => {
 for( let i = array.length -1; i > 0; i--){
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
 }
 return array;
};

barajarArray(animales);
console.log(animales);
barajarArray(animales);
console.log(animales);

