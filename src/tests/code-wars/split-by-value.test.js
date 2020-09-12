const splitByValue = require('../../code-wars/7-kyu/split-by-value')

describe('Split by value', () => {
  it('Split by value test cases', () => {
    expect(splitByValue(3, [1, 4, 3, 2])).toEqual([1, 2, 4, 3])
    expect(splitByValue(3, [4, 5, 2, 3, 1, 14])).toEqual([2, 1, 4, 5, 3, 14])
    expect(splitByValue(6, [6, 4, 10, 10, 6])).toEqual([4, 6, 10, 10, 6])
    expect(splitByValue(5, [1, 3, 5, 7, 6, 4, 2])).toEqual([1, 3, 4, 2, 5, 7, 6])
  })
})
