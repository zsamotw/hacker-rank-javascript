function maxSum(num) {
  const range = [...Array(num).keys(), num]
  return range
    .flatMap(x =>
      range.flatMap(y =>
        range.map(z => {
          if ((x + y) % 2 === 0 && (y + z) % 3 === 0 && (x + y + z) % 5 == 0) {
            return x + y + z
          } else {
            return 0
          }
        })
      )
    )
    .reduce((max, el) => Math.max(max, el))
}

module.exports = maxSum
