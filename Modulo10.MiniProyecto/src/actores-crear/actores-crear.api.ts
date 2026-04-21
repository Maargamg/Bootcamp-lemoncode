import axios from 'axios';
import {Actor} from './actores-crear.modelo';

export const crearActor = async (actor: Actor) => {
  const url = 'http://localhost:3000/actors';
  const response = await axios.post(url, actor);

  return response.data;
}