const queueTime = require('../../code-wars/6-kyu/shop-queue-time')

describe('Queue shop time', () => {
  it('Queue shop time should', () => {
    expect(queueTime([1, 1, 1], 3)).toEqual(1)
    expect(queueTime([], 3)).toEqual(0)
    expect(queueTime([10, 2, 2, 2], 2)).toEqual(10)
    expect(queueTime([2, 3, 2, 2], 2)).toEqual(5)
    expect(queueTime([2, 3, 5, 2, 7], 2)).toEqual(12)
  })
})
