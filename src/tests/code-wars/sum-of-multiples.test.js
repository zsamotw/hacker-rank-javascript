const sumOfMultiplesOf3Or5 = require('../../code-wars/6-kyu/sum-of-multiples')

describe('Sum of multiple of 3 or 5', () => {
  it('Sum should be equal', () => {
    expect(sumOfMultiplesOf3Or5(0)).toEqual(0)
    expect(sumOfMultiplesOf3Or5(10)).toEqual(23)
  })
})
