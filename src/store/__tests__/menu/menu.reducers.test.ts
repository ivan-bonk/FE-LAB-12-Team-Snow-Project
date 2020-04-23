import {menuReducer} from '../../menu/reducers/menu.reducer';

describe('menu reducer', () => {
  it('should handle menu off', () => {
    expect(
        menuReducer(undefined, {
        type: '@menu/off',
      })
    ).toEqual({ menuOn: false})
  })

  it('should handle menu toggle', () => {
    expect(
        menuReducer(undefined, {
        type: '@menu/toggle',
      })
    ).toEqual({ menuOn: true})
  })
})