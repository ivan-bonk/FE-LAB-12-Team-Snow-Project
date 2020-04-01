import { PetProfile } from '../../shared/interfaces/pet-profile.interface';
import { PetsToCompareList } from '../../pages/comparison/interfaces/pet.interface';
import { ZERO } from '../../pages/comparison/comparison.constants';

export default function transformData(data: PetProfile[]) {
  const result = [];
  const characteristicsList = data[ZERO].characteristics;
  const observationsList = data[ZERO].observations;

  for (const el of Object.keys(characteristicsList)) {
    const item: PetsToCompareList = { name: el, pets: [] };

    for (const pet of data) {
      const property = Object.getOwnPropertyDescriptor(pet.characteristics, el);
      item.pets.push({
        id: pet._id,
        breed: pet.breed,
        imgUrl: pet.imgUrl[ZERO],
        value: property?.value,
        type: true,
      });
    }
    result.push(item);
  }

  for (const el of Object.keys(observationsList)) {
    const item: PetsToCompareList = { name: el, pets: [] };

    for (const pet of data) {
      const property = Object.getOwnPropertyDescriptor(pet.observations, el);
      item.pets.push({
        id: pet._id,
        breed: pet.breed,
        imgUrl: pet.imgUrl[ZERO],
        value: ZERO,
        textValue: property?.value,
        type: false,
      });
    }
    result.push(item);
  }

  return result;
}
