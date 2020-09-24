const isPrime = require('../../code-wars/6-kyu/isprime')

describe('Is prime', () => {
  it('Is prime test cases', () => {
    expect(isPrime(-2).toBeFalsy)
    expect(isPrime(2).toBeFalsy)
    expect(isPrime(8).toBeFalsy)
    expect(isPrime(3).toBeTruthy)
    expect(isPrime(11).toBeTruthy)
  })
})

