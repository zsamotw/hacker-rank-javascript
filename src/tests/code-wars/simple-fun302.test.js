const maxSum = require('../../code-wars/6-kyu/simple-fun302')

describe('Max sum tests', () => {
  it('Sum should be equal', () => {
    expect(maxSum(0)).toEqual(0)
    expect(maxSum(3)).toEqual(5)
    expect(maxSum(5)).toEqual(10)
    expect(maxSum(9)).toEqual(25)
    expect(maxSum(30)).toEqual(90)
  })
})
