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

