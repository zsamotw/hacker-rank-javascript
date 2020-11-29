const matrixAddition = require('../../code-wars/6-kyu/matrix-addition')

describe('Queue shop time', () => {
  it('Queue shop time should', () => {
    expect(
      matrixAddition(
        [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1]
        ],
        [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1]
        ]
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ])
    expect(
      matrixAddition(
        [
          [10, 3, 4],
          [2, 4, 5]
        ],
        [
          [1, 2, 3],
          [3, 2, 1]
        ]
      )
    ).toEqual([
      [11, 5, 7],
      [5, 6, 6]
    ])
  })
})
