import { FETCH_PETS } from './result.actions.ts';

export const fetchPets = () => {
    return {
        type: FETCH_PETS
    }
}