function maxSum(num) {
  const flatMap = (f, xs) => xs.reduce((r, x) => r.concat(f(x)), [])

  const range = [...Array(num).keys(), num]
  return flatMap(
    x =>
      flatMap(
        y =>
          range.map(z => {
            if (
              (x + y) % 2 === 0 &&
              (y + z) % 3 === 0 &&
              (x + y + z) % 5 == 0
            ) {
              return x + y + z
            } else {
              return 0
            }
          }),
        range
      ),
    range
  ).reduce((max, el) => Math.max(max, el))
}

module.exports = maxSum
