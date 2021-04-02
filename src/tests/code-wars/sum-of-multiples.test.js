const sumOfMultiplesOf3Or5 = require('../../code-wars/7-kyu/sum-of-multiples')

describe('Sum of multiple of 3 or 5', () => {
  it('Sum should be equal', () => {
    expect(sumOfMultiplesOf3Or5(5)).toEqual(8)
    expect(sumOfMultiplesOf3Or5(10)).toEqual(33)
    expect(sumOfMultiplesOf3Or5(100)).toEqual(2418)
    expect(sumOfMultiplesOf3Or5(1000)).toEqual(234168)
    expect(sumOfMultiplesOf3Or5(10000)).toEqual(23341668)
    expect(sumOfMultiplesOf3Or5(100000)).toEqual(2333416668)
  })
})
