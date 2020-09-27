function compareTriplets(a, b) {
  const zip = (a, b) => a.map((e, i) => [e, b[i]])
  const zipped = zip(a, b)

  return zipped.reduce(
    (acc, el) => {
      const [aValue, bValue] = el
      const [aResult, bResult] = acc
      console.log(el, acc)
      if (aValue > bValue) {
        return [aResult + 1, bResult]
      } else if (aValue === bValue) {
        return acc
      } else {
        return [aResult, bResult + 1]
      }
    },
    [0, 0]
  )
}

module.exports = compareTriplets