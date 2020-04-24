import { nameGeneratorReducer } from 'store/name-generator/reducers/name-generator.reducers';
import { initialState, res } from '../mocks';
import {fetchPetNames, setBoyName, setGirlName} from '../actions/name-generator.actions';

describe('test nameGenerator reducer', () => {
  it('should handle @name-generator/SET_BOY', () => {
    const expectedState = {
      petNames: {
        boys: [],
        girls: [],
      },
      girlId: 0,
      boyId: 1,
      errors: '',
      loading: false,
    };
    const action = {
      type: setBoyName.type,
    };
    const updatedState = nameGeneratorReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });

  it('should handle @name-generator/SET_GIRL', () => {
    const expectedState = {
      petNames: {
        boys: [],
        girls: [],
      },
      girlId: 1,
      boyId: 0,
      errors: '',
      loading: false,
    };
    const action = {
      type: setGirlName.type,
    };
    const updatedState = nameGeneratorReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });

  it('should handle @name-generator/FETCH_REQUEST', () => {
    const expectedState = {
      petNames: {
        boys: [],
        girls: [],
      },
      girlId: 0,
      boyId: 0,
      errors: '',
      loading: true,
    };
    const action = {
      type: fetchPetNames.request,
    };
    const updatedState = nameGeneratorReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });

  it('should handle @name-generator/FETCH_SUCCESS', () => {
    const expectedState = {
      petNames: res,
      girlId: 0,
      boyId: 0,
      errors: '',
      loading: false,
    };
    const action = {
      type: fetchPetNames.success,
      payload: res,
    };
    const updatedState = nameGeneratorReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });

  it('should handle @name-generator/FETCH_ERROR', () => {
    const expectedState = {
      petNames: {
        boys: [],
        girls: [],
      },
      girlId: 0,
      boyId: 0,
      errors: 'Some error',
      loading: false,
    };
    const action = {
      type: fetchPetNames.failure,
      payload: 'Some error',
    };
    const updatedState = nameGeneratorReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
});
