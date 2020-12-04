const meeting = require('../../code-wars/6-kyu/meeting')

describe('Person on the meeting', () => {
  it('String should be equal', () => {
    expect(meeting('Tomasz:Cba;Anna:Abc')).toEqual('(ABC, ANNA)(CBA, TOMASZ)')
    expect(meeting('Tomasz:Cba;Anna:Abc;Ela:Zxy')).toEqual(
      '(ABC, ANNA)(CBA, TOMASZ)(ZXY, ELA)'
    )
    expect(meeting('Tomasz:Cba;Anna:Abc;Ela:zxy;Foo:Bar')).toEqual(
      '(ABC, ANNA)(BAR, FOO)(CBA, TOMASZ)(ZXY, ELA)'
    )
    expect(meeting('Tomasz:Cba;Baz:Bar;Anna:Abc;Ela:zxy;Foo:Bar')).toEqual(
      '(ABC, ANNA)(BAR, BAZ)(BAR, FOO)(CBA, TOMASZ)(ZXY, ELA)'
    )
  })
})
