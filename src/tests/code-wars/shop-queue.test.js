const queueTime = require('../../code-wars/6-kyu/shop-queue-time')

describe('Queue shop time', () => {
  it('Queue shop time should', () => {
    expect(queueTime([], 1)).toEqual(0)
    expect(queueTime([1, 2, 3, 4], 1)).toEqual(10)
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toEqual(9)
    expect(queueTime([1, 2, 3, 4, 5], 100)).toEqual(5)
    expect(
      queueTime(
        [43, 24, 49, 8, 8, 10, 29, 48, 5, 20, 4, 34, 22, 39, 3, 30, 24],
        3
      )
    ).toEqual(136)
  })
})
