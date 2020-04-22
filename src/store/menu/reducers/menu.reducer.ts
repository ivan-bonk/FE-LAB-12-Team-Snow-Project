import { createReducer } from 'typesafe-actions';

interface MenuState {
    menuOn: boolean
}

const initialState:MenuState = {
 menuOn: false
};

export const menuReducer = createReducer(initialState)
  .handleAction('@menu/toggle', (state: MenuState) => ({ ...state, menuOn: !state.menuOn }))
  .handleAction('@menu/off', (state: MenuState) => ({ ...state, menuOn: false }))
