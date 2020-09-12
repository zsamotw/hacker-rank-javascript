function sillyAddition(a, b) {
  const reversedNumAsList = num => num.toString().split('').reverse()
  const zip = (xs, ys) => xs.map((el, i) => [el, ys[i]])
  const aList = reversedNumAsList(a)
  const bList = reversedNumAsList(b)
  const zipped =
    aList.length > bList.length ? zip(aList, bList) : zip(bList, aList)
  return +zipped
    .map(([a, b]) => (+a || 0) + (+b || 0))
    .reverse()
    .join('')
}

module.exports = sillyAddition
