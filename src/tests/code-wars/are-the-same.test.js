const comp = require('../../code-wars/6-kyu/are-the-same')

describe('Are the same', () => {
  it('Are the same test cases', () => {
    expect(comp(null, null)).toBeFalsy()
    expect(comp(null, [1, 2, 3])).toBeFalsy()
    expect(comp([], [1, 2, 3])).toBeFalsy()
    expect(comp([], [])).toBeFalsy()
    expect(comp([1], [1, 2])).toBeFalsy()
    expect(comp([1, 2], [1, 2])).toBeTruthy()
    expect(comp([1, 2, 3], [3, 2, 1])).toBeTruthy()
  })
})
