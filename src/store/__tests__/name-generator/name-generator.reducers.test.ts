import { nameGeneratorReducer } from 'store/name-generator/reducers/name-generator.reducers';
import { initialState, res } from './hardcoded-data';

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
      type: '@name-generator/SET_BOY',
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
      type: '@name-generator/SET_GIRL',
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
      type: '@name-generator/FETCH_REQUEST',
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
      type: '@name-generator/FETCH_SUCCESS',
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
      type: '@name-generator/FETCH_ERROR',
      payload: 'Some error',
    };
    const updatedState = nameGeneratorReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
});
