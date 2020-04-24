import { BreedReducer, initialStateBreeds } from '../reducers/quiz.reducer';
import { fetchPetBreeds } from '../actions/quiz.action';

import expect from 'expect';

describe('quiz breed reducer', () => {
  it('should handle breeds FETCH_REQUEST', () => {
    const successAction = BreedReducer(initialStateBreeds, fetchPetBreeds.request);
    const expectedState = {
      breeds: [],
      errors: '',
      loading: true,
    };
    expect(successAction).toEqual(expectedState);
  });

  it('should handle  breeds FETCH_SUCCESS', () => {
    const successAction = BreedReducer(initialStateBreeds, fetchPetBreeds.success);
    const expectedState = {
      breeds: [],
      errors: '',
      loading: false,
    };
    expect(successAction).toEqual(expectedState);
  });

  it('should handle  breeds FETCH_FAILTURE', () => {
    const successAction = BreedReducer(initialStateBreeds, fetchPetBreeds.failure);
    const expectedState = {
      breeds: [],
      errors: '',
      loading: false,
    };
    expect(successAction).toEqual(expectedState);
  });
});
