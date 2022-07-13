/* eslint-disable no-undef */

import { sortByString, filterDataObjectWithInfo } from '../utils/utils'

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

describe('Filter Information', () => {
  it('should return object filtered', () => {
    const data = { name: 'dfsddd', company: '', location: 'sdfd', phoneNumber: '', website: '' }
    const dataExpected = { name: 'dfsddd', location: 'sdfd' }
    expect(filterDataObjectWithInfo(data)).toEqual(dataExpected)
  })

  it('should return empty object', () => {
    const data = { name: '', company: '', location: '', phoneNumber: '', website: '' }
    const dataExpected = { }
    expect(filterDataObjectWithInfo(data)).toEqual(dataExpected)
  })
})
