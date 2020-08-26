const wordPattern = require("../../code-wars/7-kyu/word-pattern");

describe('Word pattern', () => {
  test('Word pattern tests', () => {
    expect(wordPattern('aaa')).toEqual('0.0.0');
    expect(wordPattern('ab')).toEqual('0.1');
    expect(wordPattern('abaacb')).toEqual('0.1.0.0.2.1');
    expect(wordPattern('tomasz')).toEqual('0.1.2.3.4.5');
  });

  test("Word pattern return empty string when input is null", () => {
    expect(wordPattern(null)).toEqual('');
  });

});


