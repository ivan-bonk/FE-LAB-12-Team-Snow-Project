import { transformData } from '../services/transform-data.comparison';
import { api } from 'shared/constants/api';

export const fetchData = async (ids: string[]) => {
  const data = [];

  for (const id of ids) {
    try {
      // const pet = await fetch(`http://localhost:8080/pets/${id}`) // for testing in local api
      const pet = await fetch(`${api}/pets/${id}`);
      const response = await pet.json();
      data.push(response);
    } catch (err) {
      console.log(err);
    }
  }
  return transformData(data);
};
