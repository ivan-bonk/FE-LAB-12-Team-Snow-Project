import { createReducer } from 'typesafe-actions';

interface menuState {
    menuOn: boolean
}

const initialState:menuState = {
 menuOn: false
};

export const menuReducer = createReducer(initialState)
  .handleAction('@menu/toggle', (state: menuState) => ({ ...state, menuOn: !state.menuOn }))
  .handleAction('@menu/off', (state: menuState) => ({ ...state, menuOn: false }))
