function dup(strings) {
  const duplicateEliminator = str => {
    const { result } = str.split('').reduce(
      ({ result, prevLetter }, letter) => {
        return prevLetter === letter
          ? { result, prevLetter }
          : { result: result + letter, prevLetter: letter }
      },
      { result: '', last: undefined }
    )
    return result
  }

  return strings.map(str => duplicateEliminator(str))
}

module.exports = dup
