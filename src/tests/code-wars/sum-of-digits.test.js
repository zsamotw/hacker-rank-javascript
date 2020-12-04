const sumOfDigits = require('../../code-wars/6-kyu/sum-of-digits')

describe('Sum of digits tests', () => {
  it('Sum should be equal', () => {
    expect(sumOfDigits(0)).toEqual(0)
    expect(sumOfDigits(1)).toEqual(1)
    expect(sumOfDigits(16)).toEqual(7)
    expect(sumOfDigits(942)).toEqual(6)
    expect(sumOfDigits(132189)).toEqual(6)
    expect(sumOfDigits(493193)).toEqual(2)
  })
})
