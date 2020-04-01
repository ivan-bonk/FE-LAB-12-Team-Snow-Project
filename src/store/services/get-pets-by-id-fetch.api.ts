import { PetProfile } from '../../shared/interfaces/pet-profile.interface';
import transformData from '../services/transform-data.comparison';

export default async function fetchData(ids: string[]) {
    let data = [];
  
    for (let id of ids) {
      // const pet = await fetch(`http://localhost:8080/pets/${id}`)
      const pet: PetProfile = await fetch(`https://fathomless-ridge-53873.herokuapp.com/pets/${id}`)
        .then(response => response.json())
        .catch(err => {
          console.error(err);
        });
      data.push(pet);
    }
    
    return transformData(data);
  }