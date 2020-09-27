function countingValleys(n, s) {
  return s.reduce(
    ([result, level], el) => {
      if (el === 'D' && level === 0) {
        return [result + 1, -1]
      } else if (el === 'D') {
        return [result, level - 1]
      } else if (el === 'U') {
        return [result, level + 1]
      }
    },
    [0, 0]
  )
}

module.exports = countingValleys