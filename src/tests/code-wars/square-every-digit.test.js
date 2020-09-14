const squareEveryDigit = require('../../code-wars/7-kyu/square-every-digit')

describe('Square every digit', () => {
  it('Square every digit', () => {
    expect(squareEveryDigit('1')).toEqual(1)
    expect(squareEveryDigit('12')).toEqual(14)
    expect(squareEveryDigit('122')).toEqual(144)
    expect(squareEveryDigit('89')).toEqual(6481)
    expect(squareEveryDigit('9119')).toEqual(811181)
  })
})
