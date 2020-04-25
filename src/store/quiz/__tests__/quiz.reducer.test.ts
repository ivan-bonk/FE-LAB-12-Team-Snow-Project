import { BreedReducer, initialState, initialStateBreeds, quizReducer } from '../reducers/quiz.reducer';
import { quizAction, fetchPetBreeds } from '../actions/quiz.action';
import {BreedsState} from '../quiz.interface';
import { breed, data } from '../mocks';

describe('test quiz reducer', () => {
  it('shoud test @breeds/FETCH_SUCCESS', () => {
    const expectedState:BreedsState = {
      breeds: breed,
      loading: false,
      errors: '',
    };

    const action:any = {
      type: fetchPetBreeds.success,
      payload: breed,
    };

    expect(BreedReducer(initialStateBreeds, action)).toEqual(expectedState);
  });

  it('should test @breeds/FETCH_REQUEST', () => {
    const expectedState:BreedsState  = {
      breeds: [],
      errors: '',
      loading: true,
    };

    const action:any = {
      type: fetchPetBreeds.request,
    };

    expect(BreedReducer(initialStateBreeds, action)).toEqual(expectedState);
  });

  it('should test @breeds/FETCH_ERROR', () => {
    const expectedState:BreedsState  = {
      breeds: [],
      loading: false,
      errors: 'Error',
    };

    const action:any = {
      type: fetchPetBreeds.failure,
      payload: 'Error',
    };

    expect(BreedReducer(initialStateBreeds, action)).toEqual(expectedState);
  });

  it('shoud test COMPERE', () => {
    const expectedState = {
      breed: '',
      weight: 0,
      walkNumber: 0,
      mealNumber: 0,
      mealWeight: 0,
      medChekUp: 0,
    };

    const action:any = {
      type: quizAction.getType,
      payload: data,
    };

    expect(quizReducer(initialState, action)).toEqual(expectedState);
  });
});
