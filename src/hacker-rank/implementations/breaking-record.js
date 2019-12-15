function breakingRecords(scores) {
  const records = (acc, el) => {
    const [min, max, minCount, maxCount] = acc
    if (min === undefined && max === undefined) {
      return [el, el, minCount, maxCount]
    } else if (el < min) {
      return [el, max, minCount + 1, maxCount]
    } else if (el > max) {
      return [min, el, minCount, maxCount + 1]
    } else {
      return acc
    }
  }
  const [, , minCount, maxCount] = scores.reduce(
    (acc, el) => records(acc, el),
    [undefined, undefined, 0, 0]
  )
  return [maxCount, minCount]
}

module.exports = breakingRecords 