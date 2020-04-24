import {menuReducer} from 'store/menu/reducers/menu.reducer';

const initialState = {
  menuOn: false
 };

describe('menu reducer', () => {
  it('should handle menu off', () => {
    expect(
        menuReducer(initialState, {
        type: '@menu/off',
      })
    ).toEqual({ menuOn: false})
  })

  it('should handle menu toggle', () => {
    expect(
        menuReducer(initialState, {
        type: '@menu/toggle',
      })
    ).toEqual({ menuOn: true})
  })
})