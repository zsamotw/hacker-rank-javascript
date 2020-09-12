const mumbling = require('../../code-wars/7-kyu/mumbling')

describe('Mumbling', () => {
  it('Mumbling test cases', () => {
    expect(mumbling('abcd')).toEqual('A-Bb-Ccc-Dddd')
    expect(mumbling('RqaEzty')).toEqual('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy')
    expect(mumbling('cwAt')).toEqual('C-Ww-Aaa-Tttt')
  })
})
