import { menuReducer } from 'store/menu/reducers/menu.reducer';
import { initialState } from '../hardcoded-data';
import {toggleMenu, menuOff} from '../actions/menu.action';

describe('test menu reducer', () => {
  it('should handle @menu/off', () => {
    expect(
      menuReducer(initialState, {
        type: menuOff.type,
      }),
    ).toEqual({ menuOn: false });
  });

  it('should handle @menu/toggle', () => {
    expect(
      menuReducer(initialState, {
        type: toggleMenu.type,
      }),
    ).toEqual({ menuOn: true });
  });
});
