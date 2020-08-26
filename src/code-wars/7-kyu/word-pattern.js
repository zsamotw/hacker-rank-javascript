function wordPattern(word) {
  const helper = (acc, char) => {
    const { index, dictionary, result } = acc
    const isInDict = dictionary[char] !== undefined
    const charCode = isInDict ? dictionary[char] : index

    const nextResult = [...result, charCode]
    const nextDictionary = isInDict ? dictionary : { ...dictionary, [char]: charCode }
    const nextIndex = isInDict ? index : index + 1
    return { index: nextIndex, dictionary: nextDictionary, result: nextResult }
  }

  if (!word) return ''
  else {
    const chars = word.split('')
    const initial = { chars, index: 0, dictionary: {}, result: [] }
    const { result } = chars.reduce(helper, initial)

    return result.join('.')
  }
}

module.exports = wordPattern
