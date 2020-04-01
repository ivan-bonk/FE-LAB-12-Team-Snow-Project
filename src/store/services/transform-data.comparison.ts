import { PetProfile } from '../../shared/interfaces/pet-profile.interface';
import {  PetsToCompareList } from '../../pages/comparison/interfaces/pet.interface';

export default function transformData(data: PetProfile[]) {
    let result = [];
  
    for (let el of Object.keys(data[0].characteristics)) {
      let item: PetsToCompareList = { name: el, pets: [] };
  
      for (let pet of data) {
        const property = Object.getOwnPropertyDescriptor(pet.characteristics, el);
        item.pets.push({
          id: pet._id,
          breed: pet.breed,
          imgUrl: pet.imgUrl[0],
          value: property?.value,
          type: true,
        });
      }
      result.push(item);
    }
  
    for (let el of Object.keys(data[0].observations)) {
      let item: PetsToCompareList = { name: el, pets: [] };
  
      for (let pet of data) {
        const property = Object.getOwnPropertyDescriptor(pet.observations, el);
        item.pets.push({
          id: pet._id,
          breed: pet.breed,
          imgUrl: pet.imgUrl[0],
          value: 0,
          textValue: property?.value,
          type: false,
        });
      }
      result.push(item);
    }
  
    return result;
  }