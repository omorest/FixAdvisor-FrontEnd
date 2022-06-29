/* eslint-disable no-undef */

import { sortByString } from '../utils/utils'

describe('test sort function', () => {
  it('should return -1', () => {
    expect(sortByString('a', 'b')).toBe(-1)
  })
  it('should return 1', () => {
    expect(sortByString('b', 'a')).toBe(1)
  })
  it('should return 0', () => {
    expect(sortByString('a', 'a')).toBe(0)
  })
})
