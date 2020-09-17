const dup = require('../../code-wars/6-kyu/dup')

describe('Duplication', () => {
  it('Duplication test cases', () => {
    expect(dup(['abracadabra', 'allottee', 'assessee'])).toEqual([
      'abracadabra',
      'alote',
      'asese'
    ])
    expect(dup(['kelless', 'keenness'])).toEqual(['keles', 'kenes'])
    expect(dup([])).toEqual([])
    expect(dup([''])).toEqual([''])
  })
})
