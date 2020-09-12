const sillyAddition = require('../../code-wars/7-kyu/silly-addition')

describe('Silly addition', () => {
  it('Silly addition test cases', () => {
    expect(sillyAddition(1, 1)).toEqual(2)
    expect(sillyAddition(12, 11)).toEqual(23)
    expect(sillyAddition(248, 208)).toEqual(4416)
  })
})
