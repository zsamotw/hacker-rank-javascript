function divisibleSumPairs(n, k, ar) {
  return ar
    .flatMap(x =>
      ar.map(y => {
        if (x < y && (x + y) % k === 0) return [x, y]
      })
    )
    .filter(el => !!el).length
}

module.exports = divisibleSumPairs