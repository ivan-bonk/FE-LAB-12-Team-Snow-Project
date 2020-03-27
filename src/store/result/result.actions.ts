import { FETCH_PETS, PUT_FETCHED_PETS } from './result.types';

export const putFetchedPets = (pets: {}[]) => {
    return {
        type: PUT_FETCHED_PETS,
        payload: pets
    };
}

export const fetchPets = () => {
    return {
        type: FETCH_PETS
    };
}