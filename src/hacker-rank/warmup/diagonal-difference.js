export function diagonalDifference(arr) {
  const data = arr.reduce(
    (acc, el) => {
      const [left, right, indexL, indexR] = acc
      const l = left + el[indexL]
      const r = right + el[indexR]
      return [l, r, indexL + 1, indexR - 1]
    },
    [0, 0, 0, 2]
  )

  return Math.abs(data[1] - data[0])
}

module.exports = diagonalDifference