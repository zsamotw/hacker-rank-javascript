const minMaxSum = arr => {
  const sortedMin = arr.sort()
  const sortedMax = JSON.parse(JSON.stringify(sortedMin))
  sortedMin.pop()
  sortedMax.shift()
  const min = sortedMin.reduce((acc, el) => acc + el, 0)
  const max = sortedMax.reduce((acc, el) => acc + el, 0)
  return [min, max]
}

module.exports = minMaxSum