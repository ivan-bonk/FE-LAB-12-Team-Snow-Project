import { menuReducer } from 'store/menu/reducers/menu.reducer';
import { initialState } from './hardcoded-data';

describe('test menu reducer', () => {
  it('should handle @menu/off', () => {
    expect(
      menuReducer(initialState, {
        type: '@menu/off',
      }),
    ).toEqual({ menuOn: false });
  });

  it('should handle menu @menu/toggle', () => {
    expect(
      menuReducer(initialState, {
        type: '@menu/toggle',
      }),
    ).toEqual({ menuOn: true });
  });
});
