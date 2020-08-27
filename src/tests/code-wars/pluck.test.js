const pluck = require('../../code-wars/7-kyu/pluck')

describe('Pluck', () => {
  it('Pluck test cases', () => {
    expect(pluck([{ a: 1 }, { a: 2 }], 'a')).toEqual([1, 2])
    expect(pluck([{ a: 1 }, { a: undefined }], 'a')).toEqual([1, undefined])
    expect(pluck([{ b: 1 }, { a: 2 }], 'a')).toEqual([undefined, 2])
    expect(pluck([{ b: 1 }, { b: 2 }], 'a')).toEqual([undefined, undefined])
  })
})
